Blockly.Python['try_except_statement'] = function(block) {
    const tryCode = Blockly.Python.statementToCode(block, 'TRY_CODE');
    
    const exceptCode = Blockly.Python.statementToCode(block, 'EXCEPT_CODE');

    const exceptionVar = Blockly.Python.nameDB_.getName(
        block.getFieldValue('EXCEPTION_VARIABLE'),
        Blockly.VARIABLE_CATEGORY_NAME
    );

    const code = 
`try:
${tryCode}except Exception as ${exceptionVar}:
${exceptCode}`;

    return code;
};

// --- NEW FUNCTION CALL GENERATOR ---
Blockly.Python['function_call_with_return'] = function(block) {
    const functionName = block.getFieldValue('FUNC_NAME');
    
    const args = Blockly.Python.valueToCode(block, 'ARGS', Blockly.Python.ORDER_ATOMIC) || '';

    const code = `${functionName}(${args})`;

    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};