import random

def simulate_coins(num_coins):
    for _ in range(num_coins):
        if random.random() <= 0.7:
            continue
        else:
            return False
    return True

def simulate_games(num_games, num_coins):
    num_wins = 0
    num_losses = 0
    for _ in range(num_games):
        if simulate_coins(num_coins):
            num_wins += 1
        else:
            num_losses += 1
    return num_wins, num_losses

def main():
    num_games = 1000000
    num_coins = 12
    num_wins, num_losses = simulate_games(num_games, num_coins)
    print(f"Number of wins: {num_wins}")
    print(f"Number of losses: {num_losses}")

if __name__ == '__main__':
    main()
