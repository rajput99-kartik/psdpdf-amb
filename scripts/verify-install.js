try {
  require("pspdfkit");
} catch (error) {
  if (!/cannot find module/i.test(error.message)) {
    return;
  }
 
  process.exit(1);
}
