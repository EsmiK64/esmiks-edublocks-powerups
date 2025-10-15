import * as Blockly from 'blockly/core';
import 'blockly/python';

// --- A. Conceptual Standard Blocks (Function Call & Try/Except) ---

// Generator for Function Call
Blockly.Python['python_function_call'] = function(block: Blockly.Block) {
  const name = block.getFieldValue('NAME');
  const args = Blockly.Python.valueToCode(block, 'ARGS', Blockly.Python.ORDER_ATOMIC) || '';
  const code = `${name}(${args})\n`;
  return code;
};

// Generator for Generic Try/Except
Blockly.Python['python_try_except'] = function(block: Blockly.Block) {
  const tryCode = Blockly.Python.statementToCode(block, 'TRY');
  const catchCode = Blockly.Python.statementToCode(block, 'CATCH');

  // Python convention uses 'except Exception as e:' for a generic catch.
  const code = `try:\n${tryCode}\nexcept Exception as e:\n${catchCode || Blockly.Python.PASS}\n`;
  return code;
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