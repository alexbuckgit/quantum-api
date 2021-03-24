---
uid: Microsoft.Quantum.Samples.UnitTesting.RunTeleportation
title: RunTeleportation operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: RunTeleportation
qsharp.summary: >-
  Teleportation transfers 1 qubit by encoding it into a 2-bit message,
  using an entangled pair of qubits.
---

# RunTeleportation operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


Teleportation transfers 1 qubit by encoding it into a 2-bit message,

```qsharp
operation RunTeleportation (source : Qubit, target : Qubit) : Unit
```


## Input

### source : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

A single qubit representing the state to be teleported.


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

A single qubit initially in the |0⟩ state onto which



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

    Always returns source qubit to |0⟩.

## References

- [ *Michael A. Nielsen , Isaac L. Chuang*,

## See Also

- [For details see Section 1.3.6 of Nielsen & Chuang](xref:For details see Section 1.3.6 of Nielsen & Chuang)