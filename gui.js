let timeSecMirror = {
  elId: "secondHand",
  property: "transform",
  value: "rotate(calc(((@timeSec + 1) * 6deg) - 90deg))",
  variable: { id: "timeSec", from: "time.now.seconds" },
};
let timeMinMirror = {
  elId: "minuteHand",
  property: "transform",
  value: "rotate(calc((@timeMin * 6deg) - 90deg))",
  variable: { id: "timeMin", from: "time.now.minutes" },
};
let timeHourMirror = {
  elId: "hourHand",
  property: "transform",
  value: "rotate(calc((@timeHour * 30deg) + 18deg - 90deg))",
  variable: { id: "timeHour", from: "time.now.hours" },
};
let clockTypeMemory = {
  memoryId: "clockType",
  value: "clock",
};
let onClockBoxClick = {
  elId: "clockBox",
  codes: [
    {
      type: "conditionList",
      conditions: [
        {
          item1: {
            type: "memory",
            memoryId: "clockType",
          },
          item2: {
            type: "constant",
            constant: "clock",
          },
          type: "e",
          then: [
            {
              type: "straight",
              updateType: "gui",
              elId: "clockBox",
              property: "transform",
              newValue: "rotateY(-360deg)",
            },
            {
              type: "straight",
              updateType: "memory",
              memoryId: "clockType",
              value: "weather",
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "clockBackImage",
              property: "display",
              newValue: "none",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "clockBackShadow",
              property: "display",
              newValue: "none",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "secondHand",
              property: "display",
              newValue: "none",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "minuteHand",
              property: "display",
              newValue: "none",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "hourHand",
              property: "display",
              newValue: "none",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "clockMsg",
              property: "display",
              newValue: "block",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "weather",
              property: "display",
              newValue: "block",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "weatherMsg",
              property: "display",
              newValue: "block",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "humidity",
              property: "display",
              newValue: "block",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "weatherHumidity",
              property: "display",
              newValue: "block",
              delay: 240,
            },
          ],
        },
        {
          item1: {
            type: "memory",
            memoryId: "clockType",
          },
          item2: {
            type: "constant",
            constant: "weather",
          },
          type: "e",
          then: [
            {
              type: "straight",
              updateType: "gui",
              elId: "clockBox",
              property: "transform",
              newValue: "rotateY(0deg)",
            },
            {
              type: "straight",
              updateType: "memory",
              memoryId: "clockType",
              value: "clock",
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "clockBackImage",
              property: "display",
              newValue: "block",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "clockBackShadow",
              property: "display",
              newValue: "block",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "secondHand",
              property: "display",
              newValue: "block",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "minuteHand",
              property: "display",
              newValue: "block",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "hourHand",
              property: "display",
              newValue: "block",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "clockMsg",
              property: "display",
              newValue: "none",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "weather",
              property: "display",
              newValue: "none",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "weatherMsg",
              property: "display",
              newValue: "none",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "humidity",
              property: "display",
              newValue: "none",
              delay: 240,
            },
            {
              type: "straight",
              updateType: "gui",
              elId: "weatherHumidity",
              property: "display",
              newValue: "none",
              delay: 240,
            },
          ],
        },
      ],
    },
  ],
};
let weatherTempUpdate = {
  elId: "weatherMsg",
  property: "styledContent",
  newValue: "-",
};
let weatherHumidityUpdate = {
  elId: "weatherHumidity",
  property: "styledContent",
  newValue: "-",
};

let clockWidgetInitGui = {
  type: "Box",
  id: "clockBox",
  width: "100%",
  height: "100%",
  transition: "transform 1s",
  position: "relative",
  borderRadius: 32,
  overflow: "auto",
  background: "rgba(255, 255, 255, 1)",
  children: [
    {
      type: "Box",
      width: "100%",
      height: 32,
    },
  ],
};

for (let i = 0; i < 10; i++) {
  clockWidgetInitGui.children.push({
    type: "Box",
    width: "100%",
    height: 48,
    display: "flex",
    children: [
      {
        type: "Text",
        width: '33%',
        height: "100%",
        color: "#333",
        text: "Hello",
      },
      {
        type: "Text",
        width: '33%',
        height: "100%",
        color: "#333",
        text: "Hello",
      },
      {
        type: "Text",
        width: '33%',
        height: "100%",
        color: "#333",
        text: "Hello",
      },
    ],
  });
}

clockWidgetInitGui.children.push({
  type: "Box",
  width: "100%",
  height: 32,
});

module.exports = {
  weatherHumidityUpdate: weatherHumidityUpdate,
  weatherTempUpdate: weatherTempUpdate,
  clockTypeMemory: clockTypeMemory,
  onClockBoxClick: onClockBoxClick,
  timeHourMirror: timeHourMirror,
  timeMinMirror: timeMinMirror,
  timeSecMirror: timeSecMirror,
  clockWidgetInitGui: clockWidgetInitGui,
};
