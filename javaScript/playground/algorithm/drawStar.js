// 11번
var line = 5;
for (; line > 0; line--) {
  for (var i = 6; i - line > 0; i--) {
    process.stdout.write('*');
  }
  process.stdout.write('\n');
}

// 12번
var line = 5;
for (; line > 0; line--) {
  for (var i = 0; i < 5; i++) {
    if (i < 5 - line) {
      process.stdout.write(' ');
    } else {
      process.stdout.write('*');
    }
  }
  process.stdout.write('\n');
}

// 13번
var line = 5;
for (; line > 0; line--) {
  for (var i = 0; line - i > 0; i++) {
    process.stdout.write('*');
  }
  process.stdout.write('\n');
}

// 14번
var line = 5;
for (; line > 0; line--) {
  for (var i = 0; i < 5; i++) {
    if (line - i > 1) {
      process.stdout.write(' ');
    } else {
      process.stdout.write('*');
    }
  }
  process.stdout.write('\n');
}

// 15번
var length = 11;
var numWhiteSpace = parseInt(length / 2, 10);
var line = numWhiteSpace + 1;
for (; line > 0; line--) {
  for (var i = 0; i < length; i++) {
    if (i < numWhiteSpace) {
      process.stdout.write(' ');
    } else if (i < length - numWhiteSpace) {
      process.stdout.write('*');
    } else {
      break;
    }
  }
  process.stdout.write('\n');
  numWhiteSpace--;
}

// 16번
var length = 11;
var numWhiteSpace = 0;
var line = parseInt(length / 2, 10) + 1;
for (; line > 0; line--) {
  for (var i = 0; i < length; i++) {
    if (i < numWhiteSpace) {
      process.stdout.write(' ');
    } else if (i < length - numWhiteSpace) {
      process.stdout.write('*');
    } else {
      break;
    }
  }
  process.stdout.write('\n');
  numWhiteSpace++;
}