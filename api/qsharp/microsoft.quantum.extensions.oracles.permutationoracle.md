---
uid: Microsoft.Quantum.Extensions.Oracles.PermutationOracle
title: PermutationOracle operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Extensions.Oracles
qsharp.name: PermutationOracle
qsharp.summary: Apply a classical permutation oracle to two registers.
---

# PermutationOracle operation

Namespace: [Microsoft.Quantum.Extensions.Oracles](xref:Microsoft.Quantum.Extensions.Oracles)

Package: [OracleEmulation](https://nuget.org/packages/OracleEmulation)


Apply a classical permutation oracle to two registers.

```qsharp
operation PermutationOracle (oracle : ((Int, Int) -> Int), xbits : Qubit[], ybits : Qubit[]) : Unit is Adj
```


## Description

The effect of the oracle is a permutation of basis states according to

## Input

### oracle : ([Int](xref:microsoft.quantum.lang-ref.int),[Int](xref:microsoft.quantum.lang-ref.int)) -> [Int](xref:microsoft.quantum.lang-ref.int)

A function that defines the action of the oracle on the computational


### xbits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Input register x.


### ybits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Output register y.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)
