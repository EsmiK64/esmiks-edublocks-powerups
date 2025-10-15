const controlColor = "#ff9800";

Blockly.Blocks['try_except_statement'] = {
    init: function() {
      this.appendStatementInput("TRY_CODE")
          .setCheck(null)
          .appendField("try");
      
      this.appendStatementInput("EXCEPT_CODE")
          .setCheck(null)
          .appendField("except Exception as")
          .appendField(new Blockly.FieldVariable("e"), "EXCEPTION_VARIABLE")
          .appendField(":");
          
      this.setColour(controlColor);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    }
};

Blockly.Blocks['function_call_with_return'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("function")
            .appendField(new Blockly.FieldTextInput("my_function"), "FUNC_NAME")
            .appendField("(");
        this.appendValueInput("ARGS")
            .setCheck(null)
        this.appendDummyInput()
            .appendField(")")
            
        this.setInputsInline(true);
        this.setColour(controlColor);
        this.setOutput(true, null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};