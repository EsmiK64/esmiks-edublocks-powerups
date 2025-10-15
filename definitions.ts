const controlColor = "#ff9800"; 

Blockly.Blocks['try_except_statement'] = {
    init: function() {
      this.appendStatementInput("TRY_CODE")
          .setCheck(null)
          .appendField("try");
      
      this.appendStatementInput("EXCEPT_CODE")
          .setCheck(null)
          .appendField("except Exception as e:");
          
      this.setColour(controlColor);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    }
};