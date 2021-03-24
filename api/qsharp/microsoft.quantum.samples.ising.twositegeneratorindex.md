---
uid: Microsoft.Quantum.Samples.Ising.TwoSiteGeneratorIndex
title: TwoSiteGeneratorIndex function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: TwoSiteGeneratorIndex
qsharp.summary: Returns a generator index that is supported on two sites.
---

# TwoSiteGeneratorIndex function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingGeneratorsSample](https://nuget.org/packages/IsingGeneratorsSample)


Returns a generator index that is supported on two sites.

```qsharp
function TwoSiteGeneratorIndex (idxPauli : Int, nSites : Int, idxQubit : Int, jCoupling : (Int -> Double)) : Microsoft.Quantum.Simulation.GeneratorIndex
```


## Input

### idxPauli : [Int](xref:microsoft.quantum.lang-ref.int)

Index of the Pauli operator to be represented, where `1` denotes


### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### idxQubit : [Int](xref:microsoft.quantum.lang-ref.int)

Index `k` of the qubit that one of the represented term will act upon.


### jCoupling : [Int](xref:microsoft.quantum.lang-ref.int) -> [Double](xref:microsoft.quantum.lang-ref.double)

Function returning coefficients `Jₖ` for each two-site interaction.



## Output : [GeneratorIndex](xref:Microsoft.Quantum.Simulation.GeneratorIndex)

A `GeneratorIndex` representing the term - Jₖ {XₖXₖ₊₁, YₖYₖ₊₁, ZₖZₖ₊₁},