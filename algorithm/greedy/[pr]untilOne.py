N, K = list(map(int, input().split(' ')))

cnt = 0
while True:
  if N == 1:
    break;
  if N % K == 0:
    N /= K
  else:
    N -= 1
  cnt += 1
  
print(cnt)