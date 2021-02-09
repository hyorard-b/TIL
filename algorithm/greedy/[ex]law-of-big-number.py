# 큰 수의 법칙

N, M, K = map(int,input().split())
arr = list(map(int,input().split()))

arr.sort();

oneSet = K * arr[-1] + arr[-2]
rest = arr[-2]

res = (M // (K+1)) * oneSet + (M % (K+1)) * rest

print(res)