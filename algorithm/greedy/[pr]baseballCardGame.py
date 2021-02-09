import sys

N,M = list(map(int, input().split(' ')))

totalMin = 0

for _ in range(N):
  deck = list(map(int, input().split(' ')))
  
  deckMin = min(deck)
  
  totalMin = totalMin if totalMin > deckMin else deckMin

print(totalMin)
