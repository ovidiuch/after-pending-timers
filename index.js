module.exports = function afterPendingTimers() {
  return new Promise(function(resolve) {
    setTimeout(resolve, 0);
  });
};
