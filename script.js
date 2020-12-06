// Define study
const study = lab.util.fromObject({
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
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instructions",
      "content": "\u003Cheader class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Ch1\u003EInstructions\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain\u003E\n  \u003Cp\u003E\n    Welcome to the rotated heads task!\n  \u003C\u002Fp\u003E\n  \u003Cp\u003E\n    In this experiment, your task will be to \u003Cstrong\u003Eidentify which \n    ear (left or right) is being presented on a stylized \"head\" \n    (circle) shown on the screen\u003C\u002Fstrong\u003E. Sometimes, the head will\n    be pointed up (indicated by a triangle \"nose\" above the circle) \n    and other times the head will be pointed down (indicated by a \n    triangle nose below the circle). \n  \u003C\u002Fp\u003E\n  \u003Cp\u003E\n    To indicate your answers, please use the \u003Cstrong\u003Eleft arrow\n      \u003C\u002Fstrong\u003E (&#x2190) when the image presented contains the \n      \"left ear\", and use the \u003Cstrong\u003Eright arrow\u003C\u002Fstrong\u003E \n      (&#x2192) when the image presented contains the \"right ear.\" \n      Some images will contain no ears; please do ignore these \n      images and do not press any buttons. \n  \u003C\u002Fp\u003E\n  \u003Cp\u003E\n    When you are ready to begin, please press \u003Cstrong\u003Eany key\n      \u003C\u002Fstrong\u003E.\n  \u003C\u002Fp\u003E\n\u003C\u002Fmain\u003E"
    },
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
          "n": "150"
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
})

// Let's go!
study.run()