---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.CCZ
title: CCZ operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: CCZ
qsharp.summary: Unitary version of Controlled-Controlled-Z, gate
---

# CCZ operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


Unitary version of Controlled-Controlled-Z, gate

```qsharp
operation CCZ (a : Qubit, b : Qubit, c : Qubit) : Unit is Adj
```


## Input

### a : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

the first qubit the operation acts on


### b : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

the second qubit the operation acts on


### c : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

the third qubit the operation acts on



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

CCZ = exp( -iπ|111⟩⟨111| ) = exp( -iπ((I-Z)/2)⊗((I-Z)/2)⊗((I-Z)/2) )