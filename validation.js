function checkCategoryInput(category) {
  if (!category) {
    console.error('\nPlease type category!!\n');
    process.exit();
  }
}

function checkLimitInput(limit) {
  if (!limit || limit < 0 || isNaN(limit)) {
    console.error('\nPlease type valid value(greater than 0)!! \n');
    process.exit();
  }
}

module.exports = { checkCategoryInput, checkLimitInput };
