'''
예제 : 거스름돈 거슬러주기
'''
from collections import Counter

n = 1260
coins = [500, 100, 50, 10]
changes = []
cnt = 0

for coin in coins:
    cnt += n // coin
    changes += [coin]*(n//coin)
    n %= coin

changes = Counter(changes)

print(f'combination of changes : {dict(changes)}')
print(f'number of changes : {cnt}')