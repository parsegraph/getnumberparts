# parsegraph-getnumberparts

This module provides a function to extract the sign, exponent, and mantissa
from a given number.

    import getNumberParts from 'parsegraph-getnumberparts';

    const parts = getNumberParts(2/3);
    console.log(parts);
    // Output: { sign: 0, exponent: -1, mantissa: 1.3333333333333333 }
