def prime(n): 
    """Return a list of the first n prime numbers."""
    primes = []
    number = 2
    while len(primes) < n:
        for p in primes:
            if number % p == 0:
                break
        else:
            primes.append(number)
        number += 1
    return primes