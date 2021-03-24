---
uid: Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic.X
title: X operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic
qsharp.name: X
qsharp.summary: >-
  In OpenQASM: `gate x a { u3(pi,pi/2,pi/2) a; }`. Note that the controlled specialization is not supported,
  since OpenQASM does not support artibrary numbers of control qubits.
---

# X operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic](xref:Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic)

Package: [Microsoft.Quantum.Decompositions.OpenQASM](https://nuget.org/packages/Microsoft.Quantum.Decompositions.OpenQASM)


In OpenQASM: `gate x a { u3(pi,pi/2,pi/2) a; }`. Note that the controlled specialization is not supported,

```qsharp
operation X (qubit : Qubit) : Unit is Adj
```


## Input

### qubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)
