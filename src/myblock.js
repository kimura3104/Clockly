import Blockly from './blockly_compressed';
//import Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray(
[{
  "type": "statement",
  "message0": "もし  %1 とき %2",
  "args0": [
    {
      "type": "input_value",
      "name": "condition",
      "check": ""
    },
    {
      "type": "input_statement",
      "name": "statement"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "statement2*",
  "message0": "%1 条件 :  %2 とき %3",
  "args0": [
    {
      "type": "input_value",
      "name": "calendar",
      "check": "Calendar"
    },
    {
      "type": "input_value",
      "name": "condition",
      "check": "Boolean"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "condition",
  "message0": "%1 に %2 が%3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "item",
      "options": [
        [
          "予定名",
          "summary"
        ],
        [
          "場所",
          "location"
        ],
        [
          "説明",
          "description"
        ]
      ]
    },
    {
      "type": "field_input",
      "name": "text",
      "text": ""
    },
    {
      "type": "field_dropdown",
      "name": "dd",
      "options": [
        [
          "含まれる",
          "true"
        ],
        [
          "含まれない",
          "false"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "condition2",
  "message0": "%1 が %2 時 %3 分 %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "dt",
      "options": [
        [
          "開始時刻",
          "start"
        ],
        [
          "終了時刻",
          "end"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "h",
      "value": 0,
      "min": 0,
      "max": 23,
      "precision": 1
    },
    {
      "type": "field_number",
      "name": "m",
      "value": 0,
      "min": 0,
      "max": 59,
      "precision": 1
    },
    {
      "type": "field_dropdown",
      "name": "dd",
      "options": [
        [
          "以降",
          "after"
        ],
        [
          "以前",
          "before"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "and",
  "message0": "%1 かつ %2",
  "args0": [
    {
      "type": "input_value",
      "name": "bool1",
      "check": "Boolean"
    },
    {
      "type": "input_value",
      "name": "bool2",
      "check": "Boolean"
    }
  ],
  "inputsInline": false,
  "output": "Boolean",
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "or",
  "message0": "%1 または %2",
  "args0": [
    {
      "type": "input_value",
      "name": "bool1",
      "check": "Boolean"
    },
    {
      "type": "input_value",
      "name": "bool2",
      "check": "Boolean"
    }
  ],
  "inputsInline": false,
  "output": "Boolean",
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "hide",
  "message0": "%1 を隠す",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "item",
      "options": [
        [
          "予定名",
          "summary"
        ],
        [
          "Property",
          "title"
        ],
        [
          "説明",
          "description"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "replace",
  "message0": "%1 を %2 に置き換える",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "item",
      "options": [
        [
          "予定名",
          "summary"
        ],
        [
          "Property",
          "title"
        ],
        [
          "説明",
          "description"
        ]
      ]
    },
    {
      "type": "field_input",
      "name": "text",
      "text": ""
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "hide_event",
  "message0": "予定を隠す",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "googlecalendar",
  "lastDummyAlign0": "RIGHT",
  "message0": "googleカレンダー %1 %2 に共有",
  "args0": [
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "field_dropdown",
      "name": "calendar",
      "options": [
        [
          "",
          "defalt"
        ],
        [
          "nomlab",
          "nomlab"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "googlecalendar2",
  "lastDummyAlign0": "RIGHT",
  "message0": "%1 に共有",
  "args0": [
    {
      "type": "input_value",
      "name": "calendar",
      "check": "Calendar"
    }
  ],
  "previousStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mail",
  "lastDummyAlign0": "CENTRE",
  "message0": "%1 に共有",
  "args0": [
    {
      "type": "field_input",
      "name": "mailadress",
      "text": "family@example.com"
    }
  ],
  "previousStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "slack",
  "lastDummyAlign0": "CENTRE",
  "message0": "Slackに共有",
  "previousStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "colorchange",
  "message0": "色を%1に変える",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "item",
      "options": [
        [
          "緑",
          "green"
        ],
        [
          "ピンク",
          "pink"
        ],
        [
          "青",
          "blue"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "variables_get_calendar2",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "FIELD_NAME",
      "variable": "VAR_NAME",
      "variableTypes": ["Calendar"],
      "defaultType": "Calendar"
    }
  ],
  "output": "Calendar",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]
);

Blockly.Blocks['creat_calendar'] = {
  init: function() {
    this.appendDummyInput("calendar")
        .appendField("カレンダを新規作成: ")
        .appendField(new Blockly.FieldTextInput(""), "NAME");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['insert'] = {
  init: function() {
    this.appendValueInput("event")
    this.appendValueInput("calendar")
        .setCheck("Calendar")
        .appendField("を");
    this.appendDummyInput()
        .appendField("に追加");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['insert2'] = {
  init: function() {
    this.appendValueInput("calendar")
    .setCheck("Calendar")
    this.appendDummyInput()
        .appendField("に追加");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['insert3'] = {
  init: function() {
    if(calendar_list){
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown(calendar_list), "calendar")
        .appendField("の予定を")
        .appendField(new Blockly.FieldDropdown(calendar_list), "calendar2")
    }else{
      this.menu();
    }
    this.appendDummyInput()
        .appendField("に追加");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  },

  menu: function(){
    fetch( "/info/calendars")
      .then( response => response.json() )
      .then( json =>  {
        const d1 = new Date();
        while (true) {
          const d2 = new Date();
          if (d2 - d1 > 100) {
            break;
          }
        }
        var calendars=[["","defalt"]]
        json.items.map(c => {
          calendars.push([c.summary,c.id])
        })
        calendar_list=calendars
        this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldDropdown(calendars), "calendar")
          .appendField("の予定を")
      });
  }
};

Blockly.Blocks['event'] = {
  init: function() {
    this.appendValueInput("calendar")
        .setCheck("Calendar");
    this.appendDummyInput()
        .appendField("の予定");
    this.setInputsInline(true);
    //this.setNextStatement(true, null);
    this.setOutput(true, "Event");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignment'] = {
  init: function() {
    this.appendValueInput("value2")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["Variable","h"], ["all_events","f"], ["wages","w"], ["events","OPTIONNAME"], ["employees","location"], ["employee","description"]]), "item")
        .appendField("=");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['return'] = {
  init: function() {
    this.appendValueInput("value2")
        .setCheck(null)
        .appendField("予定を");
    this.appendDummyInput("dummy")
        .appendField("で置き換える");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['operation'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("Event");
    this.appendDummyInput()
        .appendField("について");
    this.appendStatementInput("statement")
        .setCheck(null);
    this.setInputsInline(true);
    //this.setOutput(true, null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['updated'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("が更新されたとき");
    this.appendStatementInput("statement")
        .setCheck(null);
    this.setInputsInline(true);
    //this.setOutput(true, null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['operation2'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("Event");
    this.appendDummyInput()
        .appendField("について");
    this.appendStatementInput("statement")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['connector'] = {
  init: function() {
    this.appendValueInput("e1")
        .setCheck(null);
    this.appendValueInput("e2")
        .setCheck(null);
    this.appendValueInput("e3")
        .setCheck(null);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['for'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("リスト")
    this.appendValueInput("e1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の各項目")
        .appendField(new Blockly.FieldDropdown([["Variable","employee"]]), "NAME");
    this.appendDummyInput()
        .appendField("について");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['filter'] = {
  init: function() {
    this.appendValueInput("e1")
        .setCheck(null);
    this.appendValueInput("e2")
        .setCheck(null)
        .appendField("を");
    this.appendDummyInput()
        .appendField("で絞り込んだ予定");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['filter2'] = {
  init: function() {
    this.appendValueInput("e1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("で絞り込む");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['filter3'] = {
  init: function() {
    this.appendValueInput("e1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("で絞り込む");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['property'] = {
  init: function() {
    this.appendValueInput("e1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の")
        .appendField(new Blockly.FieldDropdown([["予定名","summary"], ["場所","location"], ["説明","description"]]), "dd");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['condition4'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck(null);
    this.appendValueInput("value2")
        .setCheck(null)
        .appendField("が");
    this.appendDummyInput()
        .appendField("である");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['statement3'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .appendField("条件 : ");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("とき");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("でなければ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arithmetic'] = {
  init: function() {
    this.appendValueInput("e1")
        .setCheck(null);
    this.appendValueInput("e2")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["×","*"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(450);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['condition3'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("String")
        .appendField(new Blockly.FieldDropdown([["予定名","summary"], ["予定名","summary"], ["説明","description"]]), "item")
        .appendField("に");
    this.appendDummyInput()
        .appendField("が含まれる")
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['condition5'] = {
  init: function() {
    this.appendValueInput("date")
        .appendField(new Blockly.FieldDropdown([["開始日","start"], ["終了日","end"]]), "property")
        .appendField("が");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["","=="], ["以降",">="], ["以前","<="]]), "item")
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['condition6'] = {
  validate: function(newValue) {
    this.getSourceBlock().updateConnections(newValue);
    return newValue;
  },

  init: function() {
    this.appendValueInput("time")
        .appendField(new Blockly.FieldDropdown([["開始時刻","start"], ["終了時刻","end"]]), "property")
        .appendField("が");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["","=="], ["以降",">="], ["以前","<="], ["~","~"]],this.validate), "item")
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  },

  updateConnections: function(newValue) {
    this.removeInput('end', true);  
    if(newValue == '~') {
      this.appendValueInput('end');
    }
  }
};

Blockly.Blocks['year'] = {
  init: function() {
    this.appendValueInput("month")
        .setCheck("month")
        .appendField(new Blockly.FieldNumber(2023, 1970, Infinity, 1), "year")
        .appendField("年");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['month'] = {
  init: function() {
    this.appendValueInput("date")
        .setCheck("date")
        .appendField(new Blockly.FieldDropdown([
          ["1月","1"], ["2月","2"], ["3月","3"], ["4月","4"], ["5月","5"], ["6月","6"], ["7月","7"], ["8月","8"], ["9月","9"], ["10月","10"], ["11月","11"], ["12月","12"]
        ]), "month");
    this.setInputsInline(false);
    this.setOutput(true, "month");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['date'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "date")
        .appendField("日");
    this.setInputsInline(false);
    this.setOutput(true, "date");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['day'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["日曜日","0"], ["月曜日","1"], ["火曜日","2"], ["水曜日","3"], ["木曜日","4"], ["金曜日","5"], ["土曜日","6"]
        ]), "day");
    this.setInputsInline(false);
    this.setOutput(true, "day");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, 0, 23, 1), "hour")
        .appendField("時")
        .appendField(new Blockly.FieldNumber(0, 0, 59, 1), "minute")
        .appendField("分");
    this.setInputsInline(false);
    this.setOutput(true, "date");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lastmonth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["予定名","summary"],["説明","description"],["月","M"],["日","D"]]), "dd");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['display'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を表示");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['new_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("新しい予定");
    this.appendDummyInput()
        .appendField("予定名: ")
        .appendField(new Blockly.FieldTextInput(""), "NAME");
    this.appendDummyInput()
        .appendField("開始日時: ")
        .appendField(new Blockly.FieldNumber(1970, 0, Infinity, 1), "NAME")
        .appendField("年")
        .appendField(new Blockly.FieldNumber(1, 1, 12, 1), "NAME")
        .appendField("月")
        .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "NAME")
        .appendField("日");
    this.appendDummyInput()
        .appendField("終了日時: ")
        .appendField(new Blockly.FieldNumber(1970, 0, Infinity, 1), "NAME")
        .appendField("年")
        .appendField(new Blockly.FieldNumber(1, 1, 12, 1), "NAME")
        .appendField("月")
        .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "NAME")
        .appendField("日");
    this.appendDummyInput()
        .appendField("場所: ")
        .appendField(new Blockly.FieldTextInput(""), "NAME");
    this.appendDummyInput()
        .appendField("説明: ")
        .appendField(new Blockly.FieldTextInput(""), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move'] = {
  init: function() {
    this.appendValueInput("date")
    .setCheck(null)
    this.appendDummyInput()
        .appendField("に移動");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Variable","h"], ["all_events","f"], ["wages","w"], ["events","OPTIONNAME"], ["employees","location"], ["employee","description"]]), "item");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sum'] = {
  init: function() {
    this.appendValueInput("calendar")
        .setCheck("Event");
    this.appendDummyInput()
        .appendField("の合計時間");
    this.setInputsInline(true);
    //this.setNextStatement(true, null);
    this.setOutput(true, "Number");
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['delete'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を消す");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['statement2'] = {
  init: function() {
    this.appendValueInput("calendar")
        .setCheck("Calendar");
    this.appendDummyInput();
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .appendField("条件 : ");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("とき");
    this.setInputsInline(true);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variables_get_calendar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("calendar"), "NAME");
        //.appendField(new Blockly.FieldDropdown([["option","OPTIONNAME"]]), "NAME");
    this.appendDummyInput()
      .appendField(new Blockly.FieldLabelSerializable(""), "id")
      .setVisible(false);
    this.setOutput(true, "Calendar");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dummy_statement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Statement");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
var calendar_list
Blockly.Blocks['googlecalendar3'] = {
  //cal: null,
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("googleカレンダー");
    if(calendar_list){
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown(calendar_list), "calendar")
        .appendField("に共有")
    }else{
      this.menu();
    }
    this.setPreviousStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  },

  menu: function(){
    fetch( "/info/calendars")
      .then( response => response.json() )
      .then( json =>  {
        const d1 = new Date();
        while (true) {
          const d2 = new Date();
          if (d2 - d1 > 100) {
            break;
          }
        }
        var calendars=[["","defalt"]]
        json.items.map(c => {
          calendars.push([c.summary,c.id])
        })
        calendar_list=calendars
        this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldDropdown(calendars), "calendar")
          .appendField("に共有")
      });
  }
};

Blockly.Blocks['test'] = {
  init: function() {
    this.appendDummyInput()
        //.appendField(new Blockly.FieldLabelSerializable("aaaaa"), "NAME")
        .appendField(new Blockly.FieldDropdown([["option","OPTIONNAME"]]), "NAME");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['test'] = function(block) {
  
  var value = block.getFieldValue('NAME');
  //var code = ''+name+'\n'+dropdown_item+'="";\n';
  //var code = 'googlecalendar\n'+dropdown_item+'\n';
  //var code = 'console.log("'+dropdown_item+'");\n';
  var code = value;
  return code;
  //hide : 
};

Blockly.JavaScript['variables_get_calendar'] = function(block) {
  //var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('id'), Blockly.Variables.Calendar);
  var variable_name = block.getFieldValue('id');
  //var code = ''+name+'\n'+dropdown_item+'="";\n';
  //var code = 'googlecalendar\n'+dropdown_item+'\n';
  //var code = 'console.log("'+variable_name+'");\n';
  var code = "'"+variable_name+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
  //hide : 
};

Blockly.Python['variables_get_calendar'] = function(block) {
  var variable_name = block.getFieldValue('id');
  var code = "'"+variable_name+"'";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['statement'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var code = 'if '+value_condition+' {\n'+statements_statement+'}\n';
  return code;
};///*---------------*/\n

Blockly.Python['statement'] = function(block) {
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var statements_statement = Blockly.Python.statementToCode(block, 'statement');
  var code = 'if '+value_condition+' \n'+statements_statement+'end\n';
  return code;
};

Blockly.JavaScript['condition'] = function(block) {
  var dropdown_item = block.getFieldValue('item');
  var text_text = block.getFieldValue('text');
  var dropdown_dd = block.getFieldValue('dd');
  //var dsl = '/*'+dropdown_item+' : +++++*/'+'/*+++++'+text_text+'*/';
  var code = 'e.'+dropdown_item+'.match(/'+text_text+'/)';
  //var code = dropdown_item+' : '+text_text;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['condition'] = function(block) {
  var dropdown_item = block.getFieldValue('item');
  var text_text = block.getFieldValue('text');
  var dropdown_dd = block.getFieldValue('dd');
  var code = 'e.'+dropdown_item+'.match(/'+text_text+'/)';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['condition2'] = function(block) {
  var dropdown_dt = block.getFieldValue('dt');
  var number_h = block.getFieldValue('h');
  var number_m = block.getFieldValue('m');
  var dropdown_dd = block.getFieldValue('dd');
  var code = 'e.'+dropdown_dt+'>='+number_h+':'+number_m;
  //var code = dropdown_dt+' : after : '+number_h+':'+number_m;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['event'] = function(block) {
  var calendar = Blockly.JavaScript.valueToCode(block, 'calendar', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'await get_events('+calendar+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['event'] = function(block) {
  var calendar = Blockly.Python.valueToCode(block, 'calendar', Blockly.Python.ORDER_ATOMIC);
  var code = 'get_events('+calendar+')';
  var code1 = 'if events=get_events('+calendar+',etag_list)\n  ';
  var code2 = 'events';
  var code3 = '\nend\n';
  //return [[code2,code1,code3].join('+++'), Blockly.Python.ORDER_ATOMIC];
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.JavaScript['updated'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var code = 'if (updated('+value + ')){\n'+statement+'}\n';
  return code;
};

Blockly.Python['updated'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var statement = Blockly.Python.statementToCode(block, 'statement');
  var code = 'if updated('+value + ', etag_list)\n'+statement+'end\n';
  return code;
};

Blockly.JavaScript['operation'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var code = ''+value+'.map(async function(e) {\n'+statement+'});\n';
  return code;
};

Blockly.Python['operation'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var statement = Blockly.Python.statementToCode(block, 'statement');
  var value=value.split('+++')
  if (value[1]==null) {
    value[1]=''
    value[2]=''
  }
  //var code = value[1]+''+value[0]+'.each do |e|\n'+statement+'\nend\n'+value[2];
  var code = value[0] + '.each do |e|\n'+statement+'end\n';
  return code;
};

Blockly.JavaScript['operation2'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var code = ''+value+'.map(function(e) {\n'+statement+'return e;\n})';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['operation2'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var statement = Blockly.Python.statementToCode(block, 'statement');
  var value=value.split('+++')
  if (value[1]==null) {
    value[1]=''
    value[2]=''
  }
  //var code = value[1]+''+value[0]+'.each do |e|\n'+statement+'\nend\n'+value[2];
  var code = value[0] + '.each do |e|\n'+statement+'end\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['lastmonth'] = function(block) {
  var dropdown = block.getFieldValue('dd');
  var code = 'e.'+dropdown;
  if(dropdown == 'M'){
    code = '(function(date){\n\
      if(date.date!=null)return new Date(date.date);\n\
      else return new Date(date.date_time);\n\
    })(e.start).getMonth() + 1'
  }
  if(dropdown == 'D'){
    code = '(function(date){\n\
      if(date.date!=null)return new Date(date.date);\n\
      else return new Date(date.date_time);\n\
    })(e.start).getDate()'
  }
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['lastmonth'] = function(block) {
  var dropdown = block.getFieldValue('dd');
  var code = 'e.'+dropdown;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['year'] = function(block) {
  var month = Blockly.JavaScript.valueToCode(block, 'month', Blockly.JavaScript.ORDER_ATOMIC);
  var year = block.getFieldValue('year');
  //if(month != '')month = '-' + month;
  //var code = 'new Date("' + year + month + '")';
  //var code = 'new Date(e.start.date_time).getMonth() == 6';
  var code = 'Y' + year + 'Y' + month;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['year'] = function(block) {
  var month = Blockly.Python.valueToCode(block, 'month', Blockly.Python.ORDER_ATOMIC);
  var year = block.getFieldValue('year');
  if(month != '')month = '-' + month;
  var code = year + month;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['month'] = function(block) {
  var date = Blockly.JavaScript.valueToCode(block, 'date', Blockly.JavaScript.ORDER_ATOMIC);
  var month = block.getFieldValue('month');
  //if(date != '')date = '-' + date;
  var code = month + date;
  code = 'M' + month + 'M' + date;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Python['month'] = function(block) {
  var date = Blockly.Python.valueToCode(block, 'date', Blockly.Python.ORDER_ATOMIC);
  var month = block.getFieldValue('month');
  if(date != '')date = '-' + date;
  var code = month + date;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.JavaScript['date'] = function(block) {
  var date = block.getFieldValue('date');
  var code = date;
  code = 'D' + date + 'D';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Python['date'] = function(block) {
  var date = block.getFieldValue('date');
  var code = date;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.JavaScript['day'] = function(block) {
  var day = block.getFieldValue('day');
  var code = day;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Python['day'] = function(block) {
  var day = block.getFieldValue('day');
  var code = day;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.JavaScript['time'] = function(block) {
  var hour = block.getFieldValue('hour');
  var minute = block.getFieldValue('minute');
  var code = hour + ':' + minute;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Python['time'] = function(block) {
  var date = block.getFieldValue('date');
  var code = date;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.JavaScript['insert'] = function(block) {
  var event = Blockly.JavaScript.valueToCode(block, 'event', Blockly.JavaScript.ORDER_ATOMIC);
  var calendar = Blockly.JavaScript.valueToCode(block, 'calendar', Blockly.JavaScript.ORDER_ATOMIC);
  //var event = {'title': 'TEST','start': new Date('2022-08-18'),'end': new Date('2022-08-19'),'tag': 'office'};
  var code = 'await insert_event('+event+','+calendar+')\n';
  return code;
};

Blockly.Python['insert'] = function(block) {
  var event = Blockly.Python.valueToCode(block, 'event', Blockly.Python.ORDER_ATOMIC);
  var calendar = Blockly.Python.valueToCode(block, 'calendar', Blockly.Python.ORDER_ATOMIC);
  var code = 'insert_event('+event+','+calendar+')\n';
  return code;
};

Blockly.JavaScript['insert2'] = function(block) {
  var calendar = Blockly.JavaScript.valueToCode(block, 'calendar', Blockly.JavaScript.ORDER_ATOMIC);
  //var event = {'title': 'TEST','start': new Date('2022-08-18'),'end': new Date('2022-08-19'),'tag': 'office'};
  var code = 'await insert_event(e,'+calendar+')\n';
  return code;
};

Blockly.Python['insert2'] = function(block) {
  var calendar = Blockly.Python.valueToCode(block, 'calendar', Blockly.Python.ORDER_ATOMIC);
  var code = 'insert_event(e,'+calendar+')\n';
  return code;
};

Blockly.JavaScript['filter'] = function(block) {
  var events = Blockly.JavaScript.valueToCode(block, 'e1', Blockly.JavaScript.ORDER_ATOMIC);
  var condition = Blockly.JavaScript.valueToCode(block, 'e2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '( function(events){\n  var filtered_events=[];\n  events.forEach((e) => {if('+condition+')filtered_events.push(e);})\n  return filtered_events;\n})('+events+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['filter'] = function(block) {
  var events = Blockly.Python.valueToCode(block, 'e1', Blockly.Python.ORDER_ATOMIC);
  var condition = Blockly.Python.valueToCode(block, 'e2', Blockly.Python.ORDER_ATOMIC);
  var code = ''+events+'.filter {|e| '+condition+'}';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['condition3'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown = block.getFieldValue('item');
  var code = 'e.'+dropdown+'.match('+value+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sum'] = function(block) {
  var events = Blockly.JavaScript.valueToCode(block, 'calendar', Blockly.JavaScript.ORDER_ATOMIC);
  var code = ''+events+'.map(e => {return(parseInt(new Date(e.end.date_time) - new Date(e.start.date_time)))}).reduce((prev,curr) => {return prev+curr;})';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['sum'] = function(block) {
  var events = Blockly.Python.valueToCode(block, 'calendar', Blockly.JavaScript.ORDER_ATOMIC);
  var code = ''+events+'.map{|e| (new Date(e.end.date_time) - new Date(e.start.date_time)).to_i}.sum';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['condition4'] = function(block) {
  var value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value1+'=='+value2;
  //var code = dropdown_dt+' : after : '+number_h+':'+number_m;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['condition4'] = function(block) {
  var value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = value1+'=='+value2;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['condition5'] = function(block) {
  var date = Blockly.JavaScript.valueToCode(block, 'date', Blockly.JavaScript.ORDER_ATOMIC);
  var property = block.getFieldValue('property');
  var item = block.getFieldValue('item');
  var y = date.split('Y')[1];
  var m = date.split('M')[1];
  var d = date.split('D')[1];
  var method = '';
  var code = '';
  if(m){
    if(y && d){
      date = 'new Date("' + y + '-' + m + '-' + d + '")';
      method = '';
    }else if(y){
      if(item == '==')code = 'date.getFullYear() == ' + y + ' && date.getMonth() == ' + (m-1);
      if(item == '>=')code = 'date >= new Date("' + y + '-' + m + '")';
      if(item == '<=')code = 'date < new Date(new Date("' + y + '-' + m + '").setMonth(' + m + '))';
    }else if(d){
      if(item == '==')code = 'date.getMonth() == ' + (m-1) + ' && date.getDate() == ' + d;
      if(item == '>=')code = 'date.getMonth() > ' + (m-1) + ' || (date.getMonth() == ' + (m-1) + ' && ' + 'date.getDate() >= ' + d + ')';
      if(item == '<=')code = 'date.getMonth() < ' + (m-1) + ' || (date.getMonth() == ' + (m-1) + ' && ' + 'date.getDate() <= ' + d + ')';
    }else{
      date = m - 1;
      method = '.getMonth()';
    }
  }else if(y){
    date = y
    method = '.getFullYear()';
  }else if(d){
    date = d;
    method = '.getDate()';
  }
  if(code == '')code = 'date' + method + item + date;
  code = '(function(date){\nreturn ' + code + ';\n\
})((function(date){\n\
  if(date.date!=null)return new Date(date.date);\n\
  else return new Date(date.date_time);\n\
})(e.' + property + '))'
  //code = '(e.start.date!=null && new Date(e.' + property + '.date)' + method + item + date + ') || (e.start.date_time!=null && new Date(e.' + property + '.date_time))' + method + item + date;
  //var code = dropdown_dt+' : after : '+number_h+':'+number_m;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['condition5'] = function(block) {
  var date = Blockly.Python.valueToCode(block, 'date', Blockly.Python.ORDER_ATOMIC);
  var property = block.getFieldValue('property');
  var item = block.getFieldValue('item');
  var code = 'e.' + property + item + date;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['condition6'] = function(block) {
  var time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var end = Blockly.JavaScript.valueToCode(block, 'end', Blockly.JavaScript.ORDER_ATOMIC);
  var property = block.getFieldValue('property');
  var item = block.getFieldValue('item');
  if(item != '~') var code = 'e.' + property + item + time;
  else var code = 'e.' + property + '>=' + time + ' && e.' + property + '<=' + end;
  //var code = dropdown_dt+' : after : '+number_h+':'+number_m;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['condition6'] = function(block) {
  var date = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var property = block.getFieldValue('property');
  var item = block.getFieldValue('item');
  var code = 'e.' + property + item + date;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['property'] = function(block) {
  var value1 = Blockly.JavaScript.valueToCode(block, 'e1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dd = block.getFieldValue('dd');
  var code = value1+'.map(function(e) {return e.'+dropdown_dd + '})';
  //var code = dropdown_dt+' : after : '+number_h+':'+number_m;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['property'] = function(block) {
  var value1 = Blockly.Python.valueToCode(block, 'e1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dd = block.getFieldValue('dd');
  var code = value1+'.'+dropdown_dd;
  //var code = dropdown_dt+' : after : '+number_h+':'+number_m;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['move'] = function(block) {
  var date = Blockly.JavaScript.valueToCode(block, 'date', Blockly.JavaScript.ORDER_ATOMIC);
  var y = date.split('Y')[1];
  var m = date.split('M')[1];
  var d = date.split('D')[1];
  var code = '';
  if(y)code += 'e.start.date.setFullYear(' + y + ');\n';
  if(m)code += 'e.start.date.setMonth(' + m + ');\n';
  if(d)code += 'e.start.date.setDate(' + d + ');\n';
  if(y)code += 'e.end.date.setFullYear(' + y + ');\n';
  if(m)code += 'e.end.date.setMonth(' + m + ');\n';
  if(d)code += 'e.end.date.setDate(' + d + ');\n';
  var code = '\
    if(e.start.date!=null) {\n\
      e.start.date = new Date(e.start.date);\n\
      e.end.date = new Date(e.end.date);\n';
  if(y)code += 'e.start.date.setFullYear(' + y + ');\n';
  if(m)code += 'e.start.date.setMonth(' + m + ');\n';
  if(d)code += 'e.start.date.setDate(' + d + ');\n';
  if(y)code += 'e.end.date.setFullYear(' + y + ');\n';
  if(m)code += 'e.end.date.setMonth(' + m + ');\n';
  if(d)code += 'e.end.date.setDate(' + d + ');\n';
  code += '} else {\n\
      e.start.date_time = new Date(e.start.date_time);\n\
      e.end.date_time = new Date(e.end.date_time);\n';
  if(y)code += 'e.start.date_time.setFullYear(' + y + ');\n';
  if(m)code += 'e.start.date_time.setMonth(' + m + ');\n';
  if(d)code += 'e.start.date_time.setDate(' + d + ');\n';
  if(y)code += 'e.end.date_time.setFullYear(' + y + ');\n';
  if(m)code += 'e.end.date_time.setMonth(' + m + ');\n';
  if(d)code += 'e.end.date_time.setDate(' + d + ');\n';
  code += '}\n';
  return code;
};

Blockly.Python['move'] = function(block) {
  var date = Blockly.Python.valueToCode(block, 'date', Blockly.Python.ORDER_ATOMIC);
  var code = 'if e.start.date\ne.start.date = '+date+'else\ne.start.dateTime = '+date+'\nend';
  return code;
};

Blockly.JavaScript['var'] = function(block) {
  var dropdown_dd = block.getFieldValue('item');
  var code = dropdown_dd;
  //var code = dropdown_dt+' : after : '+number_h+':'+number_m;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['assignment'] = function(block) {
  var value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value1+'='+value2+';\n';
  return code;
};

Blockly.JavaScript['insert3'] = function(block) {
  var dropdown_item = block.getFieldValue('calendar');
  var value2 = block.getFieldValue('calendar2');
  // TODO: Assemble JavaScript into code variable.
  var code = 'fetch( "/calendars/'+dropdown_item+'/2021-0")\n.then( response => response.json() )\n.then( json =>  {\n';
  var event = 'var eventjson = {calendar: "' + value2 + '",events: json};\n';
  code = code + event;
  code = code + 'fetch("/insertevents", {\nmethod: "POST",\nheaders: {\n'+"'Accept': 'application/json',\n'Content-Type': 'application/json'\n},";
  code = code + 'body: JSON.stringify(eventjson)\n})\n';
  code = code + '});';
  return code;
};

Blockly.JavaScript['creat_calendar'] = function(block) {
  var value1 = Blockly.JavaScript.valueToCode(block, 'calendar', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var cal_json = '{access_role: "reader",\nid: "newcalendar@calendar.com",\nsummary: "'+ value1 + '",\ntime_zone: "Asia/Tokyo"\n}';
  var code = 'fetch("/creatcalendar", {\nmethod: "POST",\nheaders: {\n'+"'Accept': 'application/json',\n'Content-Type': 'application/json'\n},";
  code = code + 'body: JSON.stringify(' + cal_json + ')\n})';
  
  return code;
};

Blockly.JavaScript['display'] = function(block) {
  var value1 = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  //var code = 'window.alert((e => e/3600000+"時間"+(e%3600000)/60+"分")('+value1+'));\n';
  var code = 'var value = ' + value1 + ';\nwindow.alert(Array.isArray(value) ? value.join("\\n") : value);\n';
  //var code = 'window.alert('+value1+');\n';
  return code;
};

Blockly.Python['display'] = function(block) {
  var value1 = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = 'puts '+value1+'\n';
  return code;
};

Blockly.JavaScript['return'] = function(block) {
  var value1 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'return ' + value1 + ';\n';
  return code;
};

Blockly.Python['return'] = function(block) {
  var value1 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = 'return ' + value1 + ';\n';
  return code;
};

Blockly.JavaScript['and'] = function(block) {
  var value_bool1 = Blockly.JavaScript.valueToCode(block, 'bool1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bool2 = Blockly.JavaScript.valueToCode(block, 'bool2', Blockly.JavaScript.ORDER_ATOMIC);
  var dsl = '/*and*/';
  var code = ''+value_bool1+'&&'+value_bool2+'';
  //var code = value_bool1+' & '+value_bool2;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['and'] = function(block) {
  var value_bool1 = Blockly.Python.valueToCode(block, 'bool1', Blockly.Python.ORDER_ATOMIC);
  var value_bool2 = Blockly.Python.valueToCode(block, 'bool2', Blockly.Python.ORDER_ATOMIC);
  var code = ''+value_bool1+'&&'+value_bool2+'';
  //var code = value_bool1+' & '+value_bool2;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['or'] = function(block) {
  var value_bool1 = Blockly.JavaScript.valueToCode(block, 'bool1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bool2 = Blockly.JavaScript.valueToCode(block, 'bool2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = ''+value_bool1+'||'+value_bool2+'';
  //var code = value_bool1+' | '+value_bool2;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['or'] = function(block) {
  var value_bool1 = Blockly.Python.valueToCode(block, 'bool1', Blockly.Python.ORDER_ATOMIC);
  var value_bool2 = Blockly.Python.valueToCode(block, 'bool2', Blockly.Python.ORDER_ATOMIC);
  var code = ''+value_bool1+'||'+value_bool2+'';
  //var code = value_bool1+' & '+value_bool2;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['arithmetic'] = function(block) {
  var value_bool1 = Blockly.JavaScript.valueToCode(block, 'e1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bool2 = Blockly.JavaScript.valueToCode(block, 'e2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = ''+value_bool1+'+'+value_bool2+'';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['arithmetic'] = function(block) {
  var value_bool1 = Blockly.Python.valueToCode(block, 'e1', Blockly.Python.ORDER_ATOMIC);
  var value_bool2 = Blockly.Python.valueToCode(block, 'e2', Blockly.Python.ORDER_ATOMIC);
  var code = ''+value_bool1+'+'+value_bool2+'';
  //var code = value_bool1+' & '+value_bool2;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['hide'] = function(block) {
  //var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  //var code = '...;\n';
  var dropdown_item = block.getFieldValue('item');
  var name=''
  var i
  //for(i=1;i<value_name.length-1;i++)
    //name=name+value_name[i];
  //if (value_name == '(summary)')
    //name='summary';
  var code = 'e.'+dropdown_item+'="Untitled";\n';
  //var code = 'hide : '+dropdown_item+'\n';
  return code;
  //hide : 
};

Blockly.Python['hide'] = function(block) {
  var dropdown_item = block.getFieldValue('item');
  var code = 'e.'+dropdown_item+'="Untitled"\n';
  return code;
};

Blockly.JavaScript['replace'] = function(block) {
  //var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_item = block.getFieldValue('item');
  var text_name = block.getFieldValue('text');
  // TODO: Assemble JavaScript into code variable.
  var code = 'e.'+dropdown_item+'="'+text_name+'";\n';//e.tag="office"\n';
  
  return code;
};

Blockly.Python['replace'] = function(block) {
  var dropdown_item = block.getFieldValue('item');
  var text_name = block.getFieldValue('text');
  var code = 'e.'+dropdown_item+'="'+text_name+'"\n';
  return code;
};

Blockly.JavaScript['hide_event'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  //var code = '...;\n';
  return 'e="";\n';
};

Blockly.Python['hide_event'] = function(block) {
  return 'e=""\n';
};

Blockly.JavaScript['googlecalendar'] = function(block) {
  //var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  //var code = '...;\n';
  var dropdown_item = block.getFieldValue('calendar');
  var name=''
  var i
  //for(i=1;i<value_name.length-1;i++)
    //name=name+value_name[i];
  //if (value_name == '(summary)')
    //name='summary';
  //var code = ''+name+'\n'+dropdown_item+'="";\n';
  //var code = 'googlecalendar\n'+dropdown_item+'\n';
  var code = "";
  return code;
  //hide : 
};

Blockly.JavaScript['mail'] = function(block) {
  var text_name = block.getFieldValue('mailadress');
  //var code = 'mailadress : '+text_name+'\n';
  var code = "";
  var name=''
  var i
  return code;
};

Blockly.JavaScript['slack'] = function(block) {
  //var code = 'slack';
  var code = "";
  var name=''
  var i
  return code;
};

Blockly.JavaScript['colorchange'] = function(block) {
  var dropdown_item = block.getFieldValue('item');
  var code = 'e.color="'+dropdown_item+'";\n';
  return code;
};

