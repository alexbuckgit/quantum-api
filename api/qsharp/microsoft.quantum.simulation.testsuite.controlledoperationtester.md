---
uid: Microsoft.Quantum.Simulation.TestSuite.ControlledOperationTester
title: ControlledOperationTester operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.TestSuite
qsharp.name: ControlledOperationTester
qsharp.summary: ''
---

# ControlledOperationTester operation

Namespace: [Microsoft.Quantum.Simulation.TestSuite](xref:Microsoft.Quantum.Simulation.TestSuite)

Package: [Tests.Microsoft.Quantum.Simulators](https://nuget.org/packages/Tests.Microsoft.Quantum.Simulators)




```qsharp
operation ControlledOperationTester (actual : (Qubit[] => Unit is Ctl + Adj), expected : (Qubit[] => Unit is Ctl + Adj), numberOfQubits : Int, numberOfControls : Int) : Unit
```


## Input

### actual : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl




### expected : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl




### numberOfQubits : [Int](xref:microsoft.quantum.lang-ref.int)




### numberOfControls : [Int](xref:microsoft.quantum.lang-ref.int)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)
