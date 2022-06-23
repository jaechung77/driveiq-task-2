function checkCategoryInput(categoryInput) {
  if (!categoryInput) {
    console.error('\nPlease type category!!\n');
    process.exit();
  }
}

function checkLimitInput(limit) {
  if (!limit || limit < 0) {
    console.error('\nPlease type valid value( 0 < )!! \n');
    process.exit();
  }
}

module.exports = { checkCategoryInput, checkLimitInput };
