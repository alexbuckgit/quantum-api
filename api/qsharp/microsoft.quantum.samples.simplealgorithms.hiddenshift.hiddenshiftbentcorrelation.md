---
uid: Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift.HiddenShiftBentCorrelation
title: HiddenShiftBentCorrelation operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift
qsharp.name: HiddenShiftBentCorrelation
qsharp.summary: "Correlation-based algorithm to solve the hidden shift problem for bent functions.\rThe problem is to identify an unknown shift \U0001D460 of the arguments of two Boolean functions\r\U0001D453 and \U0001D454 that are promised to satisfy the relation \U0001D454(\U0001D465) = \U0001D453(\U0001D465 ⊕ \U0001D460) for all \U0001D465.\rNote that the promise about the functions \U0001D453 and \U0001D454 to be bent functions is assumed,\ri.e., they both have a flat Fourier (Walsh–Hadamard) spectra. Input to this algorithm\rare implementations \U0001D448_g of the Boolean function \U0001D454 and \U0001D448_f^*, an implementation of\rdual bent function of the function \U0001D453. Both functions are given via phase encoding."
---

# HiddenShiftBentCorrelation operation

Namespace: [Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift)

Package: [SimpleAlgorithms](https://nuget.org/packages/SimpleAlgorithms)


Correlation-based algorithm to solve the hidden shift problem for bent functions.

```qsharp
operation HiddenShiftBentCorrelation (Ufstar : (Qubit[] => Unit), Ug : (Qubit[] => Unit), n : Int) : Result[]
```


## Input

### Ufstar : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit) 

A quantum operation that implements $U_f^*:\ket{x}\mapsto (-1)^{f^*(x)} \ket{x}$,


### Ug : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit) 

A quantum operation that implements $U_g:\ket{x}\mapsto (-1)^{g(x)} \ket{x}$,


### n : [Int](xref:microsoft.quantum.lang-ref.int)

The number of bits of the input register |𝑥〉.



## Output : __invalid<Result>__[]

An array of type `Bool[]` which encodes the bit representation of the hidden shift.

## References

- [*Martin Roetteler*,