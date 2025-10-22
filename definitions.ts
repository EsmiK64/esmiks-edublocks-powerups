const controlColor = "#ff9800";

Blockly.Blocks['try_except_statement'] = {
    init: function () {
        this.appendDummyInput().appendField("try");
        this.appendStatementInput("TRY_CODE").setCheck(null);

        this.appendDummyInput().appendField("except Exception as");
        this.appendDummyInput().appendField(new Blockly.FieldVariable("e"), "EXCEPTION_VARIABLE");
        this.appendDummyInput().appendField(":");
        this.appendStatementInput("EXCEPT_CODE").setCheck(null);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(!0);
        this.setColour(controlColor);
    }
};

Blockly.Blocks['function_call_with_return'] = {
    init: function () {
        this.appendDummyInput().appendField("function");
        this.appendValueInput("FUNC_NAME").setCheck(null);
        this.appendDummyInput().appendField("arguments:");
        this.appendValueInput("ARGS").setCheck(null);

        this.setInputsInline(!0);
        this.setOutput(!0, null);
        this.setColour(controlColor);
    }
};
