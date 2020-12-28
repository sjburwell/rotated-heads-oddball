export default {
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 142.31,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "get ready!",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "getready",
      "timeout": "2000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": "0",
          "top": 0,
          "angle": 0,
          "width": 58.4,
          "height": 113,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "+",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "100",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "fixation",
      "timeout": "2000"
    },
    {
      "type": "lab.html.Frame",
      "context": "\u003Cmain data-labjs-section=\"frame\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
      "contextSelector": "[data-labjs-section=\"frame\"]",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "taskframe",
      "content": {
        "type": "lab.flow.Loop",
        "templateParameters": [
          {
            "img": "static\u002Ftarg_up_right.jpg",
            "iti": "750",
            "hit": "ArrowRight",
            "miss": "ArrowLeft"
          },
          {
            "img": "static\u002Ftarg_dn_right.jpg",
            "iti": "800",
            "hit": "ArrowRight",
            "miss": "ArrowLeft"
          },
          {
            "img": "static\u002Ftarg_up_left.jpg",
            "iti": "850",
            "hit": "ArrowLeft",
            "miss": "ArrowRight"
          },
          {
            "img": "static\u002Ftarg_dn_left.jpg",
            "iti": "900",
            "hit": "ArrowLeft",
            "miss": "ArrowRight"
          },
          {
            "img": "static\u002Fstandard.jpg",
            "iti": "950",
            "hit": "",
            "miss": ""
          },
          {
            "img": "static\u002Fstandard.jpg",
            "iti": "1000",
            "hit": "",
            "miss": ""
          },
          {
            "img": "static\u002Fstandard.jpg",
            "iti": "1050",
            "hit": "",
            "miss": ""
          },
          {
            "img": "static\u002Fstandard.jpg",
            "iti": "1100",
            "hit": "",
            "miss": ""
          },
          {
            "img": "static\u002Fstandard.jpg",
            "iti": "1150",
            "hit": "",
            "miss": ""
          },
          {
            "img": "static\u002Fstandard.jpg",
            "iti": "1200",
            "hit": "",
            "miss": ""
          },
          {
            "img": "static\u002Fstandard.jpg",
            "iti": "1250",
            "hit": "",
            "miss": ""
          },
          {
            "img": "static\u002Fstandard.jpg",
            "iti": "1300",
            "hit": "",
            "miss": ""
          }
        ],
        "sample": {
          "mode": "draw",
          "n": "200"
        },
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "oddball-task",
        "shuffleGroups": [
          [
            "iti"
          ]
        ],
        "template": {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "keydown(${ parameters.hit })": "hit",
            "keydown(${ parameters.miss })": "miss"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "trial",
          "timeout": "1500",
          "correctResponse": "hit",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 58.4,
                  "height": 113,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "100",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "prestimulus",
              "timeout": "250"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 500,
                  "height": 400,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${parameters.img}",
                  "autoScale": false
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "targ_dn_left.jpg": "embedded\u002F5de97a18766c85f80577b2814809ec5f6e8c866dc12c4fb9c6c6161cbdad64c5.jpg"
              },
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "stimulus",
              "timeout": "250"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 58.4,
                  "height": 113,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "100",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "poststimulus",
              "timeout": "${ parameters.iti }"
            }
          ]
        }
      }
    }
  ]
}