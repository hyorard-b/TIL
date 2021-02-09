N = int(input())

time = [0, 0, 0]
cnt = 0

while time[0] < N + 1:
  for i in [str(i) for i in time]:
    if '3' in i:
      cnt += 1
      break;
    
  time[2] += 1
  
  if time[2] == 60:
    time[1] += 1
    if time[1] == 60:
      time[0] += 1
      time[1] = 0
    time[2] = 0

print(cnt)