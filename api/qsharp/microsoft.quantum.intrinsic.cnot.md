---
uid: Microsoft.Quantum.Intrinsic.CNOT
title: CNOT operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: CNOT
qsharp.summary: Applies the controlled-NOT (CNOT) gate to a pair of qubits.
---

# CNOT operation

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type3.Core](https://nuget.org/packages/Microsoft.Quantum.Type3.Core)


Applies the controlled-NOT (CNOT) gate to a pair of qubits.

```qsharp
operation CNOT (control : Qubit, target : Qubit) : Unit is Adj + Ctl
```


## Description

\begin{align}

## Input

### control : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Control qubit for the CNOT gate.


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Target qubit for the CNOT gate.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

Equivalent to: