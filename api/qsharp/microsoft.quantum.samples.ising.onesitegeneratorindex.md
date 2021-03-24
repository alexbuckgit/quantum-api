---
uid: Microsoft.Quantum.Samples.Ising.OneSiteGeneratorIndex
title: OneSiteGeneratorIndex function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: OneSiteGeneratorIndex
qsharp.summary: Returns a generator index that is supported on a single site.
---

# OneSiteGeneratorIndex function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingGeneratorsSample](https://nuget.org/packages/IsingGeneratorsSample)


Returns a generator index that is supported on a single site.

```qsharp
function OneSiteGeneratorIndex (idxPauli : Int, idxQubit : Int, hCoupling : (Int -> Double)) : Microsoft.Quantum.Simulation.GeneratorIndex
```


## Input

### idxPauli : [Int](xref:microsoft.quantum.lang-ref.int)

Index of the Pauli operator to be represented, where `1` denotes


### idxQubit : [Int](xref:microsoft.quantum.lang-ref.int)

Index `k` of the qubit that the represented term will act upon.


### hCoupling : [Int](xref:microsoft.quantum.lang-ref.int) -> [Double](xref:microsoft.quantum.lang-ref.double)

Function returning coefficients `hₖ` for each site. E.g.:



## Output : [GeneratorIndex](xref:Microsoft.Quantum.Simulation.GeneratorIndex)

A `GeneratorIndex` representing the term - hₖ {Xₖ, Yₖ, Zₖ}, where hₖ is the