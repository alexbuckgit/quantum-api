---
uid: Microsoft.Quantum.Synthesis.PauliAsSingleQubitClifford
title: PauliAsSingleQubitClifford function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Synthesis
qsharp.name: PauliAsSingleQubitClifford
qsharp.summary: >-
  Returns a representation of a single-qubit Pauli operator as
  a single-qubit Clifford operator that acts by conjugation.
---

# PauliAsSingleQubitClifford function

Namespace: [Microsoft.Quantum.Synthesis](xref:Microsoft.Quantum.Synthesis)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns a representation of a single-qubit Pauli operator as

```qsharp
function PauliAsSingleQubitClifford (pauli : Pauli) : Microsoft.Quantum.Synthesis.SingleQubitClifford
```


## Description

Given a Pauli operator $P$, this function returns a Clifford operator

## Input

### pauli : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

The Pauli operator to be represented as a Clifford operator.



## Output : [SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford)



## Remarks

For a value `pauli` of type `Pauli`, `ApplyP(pauli, _)` and