Blockly.Python['try_except_statement'] = function(block) {
    const tryCode = Blockly.Python.statementToCode(block, 'TRY_CODE');
    const exceptCode = Blockly.Python.statementToCode(block, 'EXCEPT_CODE');
    
    const exceptionVar = Blockly.Python.nameDB_.getName(
        block.getFieldValue('EXCEPTION_VARIABLE'),
        Blockly.VARIABLE_CATEGORY_NAME
    );

    const code = `try:\n${tryCode}except Exception as ${exceptionVar}:\n${exceptCode}`;

    return code + '\n';
};


// --- B. Advanced Blocks ---

// Generator for List Comprehension
Blockly.Python['python_list_comprehension'] = function(block: Blockly.Block) {
  const expression = Blockly.Python.valueToCode(block, 'EXPRESSION', Blockly.Python.ORDER_NONE) || 'None';
  const itemVar = block.getFieldValue('ITEM_VAR');
  const iterable = Blockly.Python.valueToCode(block, 'ITERABLE', Blockly.Python.ORDER_NONE) || '[]';
  const condition = Blockly.Python.valueToCode(block, 'CONDITION', Blockly.Python.ORDER_NONE);

  let code = `[${expression} for ${itemVar} in ${iterable}`;

  if (condition) {
    code += ` if ${condition}`;
  }
  code += ']';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

// Generator for Flexible Function Definition
Blockly.Python['python_flexible_function_def'] = function(block: Blockly.Block) {
  const name = block.getFieldValue('NAME');
  const useArgs = block.getFieldValue('USE_ARGS') === 'TRUE';
  const useKwargs = block.getFieldValue('USE_KWARGS') === 'TRUE';
  const codeBlock = Blockly.Python.statementToCode(block, 'DO');

  const params: string[] = [];
  if (useArgs) {
    params.push('*args');
  }
  if (useKwargs) {
    params.push('**kwargs');
  }

  const paramStr = params.join(', ');
  const code = `def ${name}(${paramStr}):\n${codeBlock || Blockly.Python.PASS}\n`;
  return code;
};

// Generator for Simple Decorator application
Blockly.Python['python_simple_decorator'] = function(block: Blockly.Block) {
  const decoratorName = Blockly.Python.valueToCode(block, 'DECORATOR_NAME', Blockly.Python.ORDER_ATOMIC) || 'my_decorator';
  const functionDefinition = Blockly.Python.statementToCode(block, 'FUNCTION_DEFINITION');

  const code = `@${decoratorName.replace(/["']/g, '')}\n${functionDefinition}`;
  return code;
};

// Generator for Context Manager (with statement)
Blockly.Python['python_context_manager'] = function(block: Blockly.Block) {
  const resource = Blockly.Python.valueToCode(block, 'RESOURCE', Blockly.Python.ORDER_NONE) || 'None';
  const asVariable = block.getFieldValue('AS_VARIABLE');
  const codeBlock = Blockly.Python.statementToCode(block, 'DO');

  const code = `with ${resource} as ${asVariable}:\n${codeBlock || Blockly.Python.PASS}\n`;
  return code;
};

// Generator for Generator Function (using yield)
Blockly.Python['python_generator_function'] = function(block: Blockly.Block) {
  const name = block.getFieldValue('NAME');
  const yieldExpression = Blockly.Python.valueToCode(block, 'YIELD_EXPRESSION', Blockly.Python.ORDER_NONE) || 'None';
  
  // Generating a simple loop structure to contain the 'yield'
  const code = `def ${name}():\n  # This is a memory-efficient generator\n  for i in range(5):\n    yield ${yieldExpression}\n`;
  return code;
};