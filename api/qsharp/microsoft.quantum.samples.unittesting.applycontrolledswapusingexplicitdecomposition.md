---
uid: Microsoft.Quantum.Samples.UnitTesting.ApplyControlledSWAPUsingExplicitDecomposition
title: ApplyControlledSWAPUsingExplicitDecomposition operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: ApplyControlledSWAPUsingExplicitDecomposition
qsharp.summary: >-
  Implementation of the 3 qubit Fredkin gate over the Clifford+T gate set,
  according to Amy et al
---

# ApplyControlledSWAPUsingExplicitDecomposition operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


Implementation of the 3 qubit Fredkin gate over the Clifford+T gate set,

```qsharp
operation ApplyControlledSWAPUsingExplicitDecomposition (control : Qubit, target1 : Qubit, target2 : Qubit) : Unit is Adj + Ctl
```


## Input

### control : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

Uses 7 T gates, 8 CNOT gates, 2 Hadamard gates and has T-depth 4.

## References

- [ *M. Amy, D. Maslov, M. Mosca, M. Roetteler*,

## See Also

- [For the circuit diagram see Figure 7 (e) onMarkdig.Syntax.Inlines.LineBreakInlineMarkdig.Syntax.Inlines.LinkInline