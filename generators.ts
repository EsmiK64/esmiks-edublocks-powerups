Blockly.Python['try_except_statement'] = function(block) {
    const tryCode = Blockly.Python.statementToCode(block, 'TRY_CODE');
    const exceptCode = Blockly.Python.statementToCode(block, 'EXCEPT_CODE');
    
    // Retrieve the variable name set by the user from the 'EXCEPTION_VARIABLE' field
    const exceptionVar = Blockly.Python.nameDB_.getName(
        block.getFieldValue('EXCEPTION_VARIABLE'),
        Blockly.VARIABLE_CATEGORY_NAME
    );

    // Assemble the complete Python try/except structure using the dynamic variable name
    const code = 
`try:
${tryCode}except Exception as ${exceptionVar}:
    print(f"An error occurred: {${exceptionVar}}")
${exceptCode}`;

    return code;
};