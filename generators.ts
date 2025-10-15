Blockly.Python['try_except_statement'] = function(block) {
    const tryCode = Blockly.Python.statementToCode(block, 'TRY_CODE');
    const exceptCode = Blockly.Python.statementToCode(block, 'EXCEPT_CODE');

    const code = 
`try:
${tryCode}except Exception as e:
    print(f"An error occurred: {e}")
${exceptCode}`;

    return code;
};