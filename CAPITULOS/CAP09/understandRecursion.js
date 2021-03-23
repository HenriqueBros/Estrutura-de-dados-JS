function understandRecursion(doIunderstandRecursion) {
    const recursionAnswer = confirm('Do you understand recursion?');
    if(recursionAnswer === true) {
        return true;
    }
    understandRecursion(recursionAnswer);
}