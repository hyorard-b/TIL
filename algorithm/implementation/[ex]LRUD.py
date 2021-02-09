N = int(input())
plans = input().split(' ')

x, y = 1, 1
moveX = [0, 0, -1, 1]
moveY = [-1, 1, 0, 0]
dircs = ['L', 'R', 'U', 'D']

for plan in plans:
  for i in range(len(dircs)):
    if dircs[i] == plan:
      mX = moveX[i]
      mY = moveY[i]
    
  if x + mX < 1 or x + mX > N or y + mY < 1 or y + mY > N:
     continue;
  
  x += mX
  y += mY

print(x, y) 