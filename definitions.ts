// --- A. Conceptual Standard Blocks (Function Call & Try/Except) ---

// Block for Function Call (assuming a simple named function)
Blockly.Blocks['python_function_call'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call function')
        .appendField(new Blockly.FieldTextInput('my_function'), 'NAME');
    this.appendValueInput('ARGS')
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('with arguments');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Calls a named function with specified arguments.');
  }
};

// Block for Generic Try/Except
Blockly.Blocks['python_try_except'] = {
  init: function() {
    this.appendStatementInput('TRY')
        .setCheck(null)
        .appendField('try');
    this.appendStatementInput('CATCH')
        .setCheck(null)
        .appendField('except');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('Executes code and handles any generic exception.');
  }
};

// --- B. Advanced Blocks ---

// Block for List Comprehension: [ expression for item in iterable if condition ]
Blockly.Blocks['python_list_comprehension'] = {
  init: function() {
    this.appendValueInput('EXPRESSION')
        .setCheck(null)
        .appendField('create list of')
        .appendField(new Blockly.FieldVariable('item'), 'ITEM_VAR');
    this.appendValueInput('ITERABLE')
        .setCheck(null)
        .appendField('for')
        .appendField(new Blockly.FieldVariable('item'), 'ITEM_VAR_2')
        .appendField('in');
    this.appendValueInput('CONDITION')
        .setCheck('Boolean')
        .appendField('if')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setOutput(true, 'List');
    this.setColour(230);
    this.setTooltip('Creates a list using list comprehension (expression for item in iterable if condition).');
  }
};

// Block for Flexible Function Definition (using *args and **kwargs)
Blockly.Blocks['python_flexible_function_def'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('define flexible function')
        .appendField(new Blockly.FieldTextInput('my_flexible_func'), 'NAME');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Accept *args')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'USE_ARGS')
        .appendField('Accept **kwargs')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'USE_KWARGS');
    this.appendStatementInput('DO')
        .setCheck(null)
        .appendField('do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Defines a function that can accept an arbitrary number of positional (*args) and/or keyword (**kwargs) arguments.');
  }
};

// Block for Simple Decorator application
Blockly.Blocks['python_simple_decorator'] = {
  init: function() {
    this.appendValueInput('DECORATOR_NAME')
        .setCheck('String')
        .appendField('apply decorator @');
    this.appendStatementInput('FUNCTION_DEFINITION')
        .setCheck('function_definition')
        .appendField('to function');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('Applies a decorator to the subsequent function definition.');
  }
};

// Block for Context Manager (with statement)
Blockly.Blocks['python_context_manager'] = {
  init: function() {
    this.appendValueInput('RESOURCE')
        .setCheck(null)
        .appendField('with resource');
    this.appendDummyInput()
        .appendField('as variable')
        .appendField(new Blockly.FieldTextInput('f'), 'AS_VARIABLE');
    this.appendStatementInput('DO')
        .setCheck(null)
        .appendField('do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('Manages a resource (like a file) using the Python "with" statement, ensuring proper cleanup.');
  }
};

// Block for Generator Function (using yield)
Blockly.Blocks['python_generator_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('define generator')
        .appendField(new Blockly.FieldTextInput('my_generator'), 'NAME');
    this.appendValueInput('YIELD_EXPRESSION')
        .setCheck(null)
        .appendField('yields expression');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip('Defines a function that uses "yield" to generate a sequence of values, saving memory.');
  }
};