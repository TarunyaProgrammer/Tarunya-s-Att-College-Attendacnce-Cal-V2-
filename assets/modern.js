const { useState, useEffect } = React;
const { motion, AnimatePresence } = framerMotion;

const useAttendance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAccessToken = async () => {
    try {
      const response = await chrome.runtime.sendMessage({
        action: "getCookies",
      });
      const cookie = response.cookies.find(
        (c) => c.name === "access_token_ns_student_web",
      );
      return cookie ? cookie.value : null;
    } catch (err) {
      console.error("Failed to get access token:", err);
      return null;
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });
      if (tabs.length === 0 || !tabs[0].url) {
        throw new Error("No active tab found");
      }

      const activeUrl = tabs[0].url;
      if (!activeUrl.startsWith("https://my.newtonschool.co/course/")) {
        if (activeUrl.startsWith("https://my.newtonschool.co/dashboard")) {
          throw new Error(
            "Please Select a NST course first, then Open Extension",
          );
        }
        throw new Error("Please open a Newton School course page first.");
      }

      const courseHash = activeUrl.split("/")[4];
      const token = await getAccessToken();
      if (!token) throw new Error("Please login to Newton School.");

      const coursesResponse = await axios.get(
        `https://my.newtonschool.co/api/v2/course/h/${courseHash}/learning_course/all/?pagination=false`,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      const filtered = coursesResponse.data.filter((c) =>
        c.title.includes("Newton School of Technology"),
      );

      const grouped = {};
      const uniqueNames = [
        ...new Set(filtered.map((c) => c.short_display_name.split(" ")[0])),
      ];

      for (const name of uniqueNames) {
        grouped[name] = {
          main: filtered.filter(
            (f) =>
              f.short_display_name.startsWith(name) &&
              !f.short_display_name.includes("Lab") &&
              !f.short_display_name.includes("Tut"),
          ),
          lab: filtered.filter(
            (f) =>
              f.short_display_name.includes(name) &&
              (f.short_display_name.includes("Lab") ||
                f.short_display_name.includes("Tut")),
          ),
        };
      }

      const attendanceResults = [];
      let idCounter = 0;

      for (const [groupName, sections] of Object.entries(grouped)) {
        let attendedSum = 0;
        let totalSum = 0;

        const allSections = [...sections.main, ...sections.lab];
        for (const section of allSections) {
          try {
            const perf = await axios.get(
              `https://my.newtonschool.co/api/v2/course/h/${section.hash}/self_performance`,
              { headers: { Authorization: `Bearer ${token}` } },
            );
            attendedSum += perf.data.total_lectures_attended || 0;
            totalSum += perf.data.total_lectures || 0;
          } catch (e) {
            console.error(`Error for ${section.short_display_name}:`, e);
          }
        }

        attendanceResults.push({
          id: idCounter++,
          name: groupName,
          attended: attendedSum,
          total: totalSum,
          percentage:
            totalSum > 0 ? Math.round((attendedSum / totalSum) * 100) : 0,
          color: getRandomColor(idCounter),
        });
      }

      setData(attendanceResults);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getRandomColor = (idx) => {
    const colors = [
      "#8b5cf6",
      "#3b82f6",
      "#ec4899",
      "#10b981",
      "#f59e0b",
      "#06b6d4",
    ];
    return colors[idx % colors.length] || colors[0];
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

const ProgressRing = ({ percentage, color }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return React.createElement(
    "div",
    { className: "percentage-ring" },
    React.createElement(
      "svg",
      { width: 80, height: 80 },
      React.createElement("circle", {
        cx: 40,
        cy: 40,
        r: radius,
        fill: "transparent",
        stroke: "rgba(255,255,255,0.05)",
        strokeWidth: "6",
      }),
      React.createElement(motion.circle, {
        cx: 40,
        cy: 40,
        r: radius,
        fill: "transparent",
        stroke: color,
        strokeWidth: "6",
        strokeDasharray: circumference,
        initial: { strokeDashoffset: circumference },
        animate: { strokeDashoffset: offset },
        transition: { duration: 1.5, ease: "easeOut" },
        strokeLinecap: "round",
      }),
    ),
    React.createElement(
      "div",
      { className: "percentage-text", style: { color } },
      `${percentage}%`,
    ),
  );
};

const App = () => {
  const { data, loading, error } = useAttendance();

  if (loading) {
    return React.createElement(
      "div",
      {
        style: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      React.createElement(motion.div, {
        animate: { rotate: 360 },
        transition: { repeat: Infinity, duration: 1, ease: "linear" },
        style: {
          width: 40,
          height: 40,
          border: "4px solid rgba(255,255,255,0.1)",
          borderTopColor: "#8b5cf6",
          borderRadius: "50%",
        },
      }),
    );
  }

  if (error) {
    return React.createElement(
      "div",
      {
        className: "glass-panel",
        style: { padding: 40, textAlign: "center", margin: "auto" },
      },
      React.createElement(
        "h3",
        { style: { fontSize: 24, marginBottom: 16 } },
        "Oops!",
      ),
      React.createElement(
        "p",
        { style: { color: "#f87171", fontSize: 16 } },
        error,
      ),
      React.createElement(
        "button",
        {
          onClick: () => window.location.reload(),
          style: {
            marginTop: 24,
            padding: "12px 24px",
            borderRadius: 12,
            border: "none",
            background: "#8b5cf6",
            color: "white",
            cursor: "pointer",
            fontWeight: 600,
          },
        },
        "Retry",
      ),
    );
  }

  const overallAttended = data.reduce((acc, curr) => acc + curr.attended, 0);
  const overallTotal = data.reduce((acc, curr) => acc + curr.total, 0);
  const overallPercentage =
    overallTotal > 0 ? Math.round((overallAttended / overallTotal) * 100) : 0;

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      motion.header,
      {
        className: "header",
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
      },
      React.createElement(
        "div",
        null,
        React.createElement("h1", { className: "title" }, "Tarunya's Att"),
        React.createElement(
          "p",
          { className: "credit" },
          "Crafted with ❤️ for Tarunya",
        ),
      ),
      React.createElement(
        "div",
        {
          className: "glass-panel",
          style: {
            padding: "12px 20px",
            display: "flex",
            alignItems: "baseline",
            gap: 10,
          },
        },
        React.createElement(
          "span",
          { className: "stat-label", style: { fontSize: 13 } },
          "Overall Progress",
        ),
        React.createElement(
          "span",
          { className: "stat-value" },
          `${overallPercentage}%`,
        ),
      ),
    ),

    React.createElement(
      "div",
      { className: "dashboard-grid" },
      React.createElement(
        AnimatePresence,
        null,
        data.map((item, index) =>
          React.createElement(
            motion.div,
            {
              key: item.id,
              className: "glass-panel card",
              initial: { opacity: 0, scale: 0.9, y: 20 },
              animate: { opacity: 1, scale: 1, y: 0 },
              transition: { delay: index * 0.1, duration: 0.4 },
            },
            React.createElement("div", { className: "card-title" }, item.name),
            React.createElement(ProgressRing, {
              percentage: item.percentage,
              color: item.color,
            }),
            React.createElement(
              "div",
              { className: "progress-info" },
              React.createElement(
                "div",
                { style: { fontSize: 14, fontWeight: 500 } },
                `${item.attended} / ${item.total} Attended`,
              ),
              React.createElement(
                "div",
                {
                  className: `status-badge status-${item.percentage >= 85 ? "excellent" : item.percentage >= 75 ? "good" : item.percentage >= 65 ? "average" : "poor"}`,
                },
                item.percentage >= 85
                  ? "Excellent"
                  : item.percentage >= 75
                    ? "Good"
                    : item.percentage >= 65
                      ? "Average"
                      : "Poor",
              ),
            ),
          ),
        ),
      ),
    ),

    React.createElement(
      motion.footer,
      {
        className: "footer",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.5 },
      },
      React.createElement(
        "div",
        { className: "overall-stat" },
        React.createElement(
          "span",
          { className: "stat-label" },
          "System Health",
        ),
        React.createElement(
          "div",
          {
            style: {
              width: 450,
              height: 10,
              background: "rgba(255,255,255,0.05)",
              borderRadius: 5,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.05)",
            },
          },
          React.createElement(motion.div, {
            initial: { width: 0 },
            animate: { width: `${overallPercentage}%` },
            transition: { duration: 1.2, ease: "easeInOut" },
            style: {
              height: "100%",
              background: "linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4)",
            },
          }),
        ),
      ),
      React.createElement(
        "div",
        { className: "stat-label", style: { fontSize: 12, fontWeight: 600 } },
        `${overallAttended} / ${overallTotal} Total Lectures`,
      ),
    ),
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
