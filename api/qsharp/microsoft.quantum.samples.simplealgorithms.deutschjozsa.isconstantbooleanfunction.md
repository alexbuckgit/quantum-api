---
uid: Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa.IsConstantBooleanFunction
title: IsConstantBooleanFunction operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa
qsharp.name: IsConstantBooleanFunction
qsharp.summary: "Deutsch–Jozsa is a quantum algorithm that decides whether a given Boolean function\r\U0001D453 that is promised to either be constant or to be balanced — i.e., taking the\rvalues 0 and 1 the exact same number of times — is actually constant or balanced.\rThe operation `IsConstantBooleanFunction` answers this question by returning the\rBoolean value `true` if the function is constant and `false` if it is not. Note\rthat the promise that the function is either constant or balanced is assumed."
---

# IsConstantBooleanFunction operation

Namespace: [Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa)

Package: [SimpleAlgorithms](https://nuget.org/packages/SimpleAlgorithms)


Deutsch–Jozsa is a quantum algorithm that decides whether a given Boolean function

```qsharp
operation IsConstantBooleanFunction (Uf : ((Qubit[], Qubit) => Unit), n : Int) : Bool
```


## Input

### Uf : ([Qubit](xref:microsoft.quantum.lang-ref.qubit)[],[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit) 

A quantum operation that implements |𝑥〉|𝑦〉 ↦ |𝑥〉|𝑦 ⊕ 𝑓(𝑥)〉,


### n : [Int](xref:microsoft.quantum.lang-ref.int)

The number of bits of the input register |𝑥〉.



## Output : [Bool](xref:microsoft.quantum.lang-ref.bool)

A boolean value `true` that indicates that the function is constant and `false`

## References

- [ *Michael A. Nielsen , Isaac L. Chuang*,

## See Also

- [For details see Section 1.4.3 of Nielsen & Chuang.](xref:For details see Section 1.4.3 of Nielsen & Chuang.)