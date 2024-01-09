---
uid: Microsoft.Quantum.ResourceEstimation.AccountForEstimates
title: AccountForEstimates operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.ResourceEstimation
qsharp.name: AccountForEstimates
qsharp.summary: >-
  Account for the resource estimates of an unimplemented operation,
  which were obtainted separately. This operation is only available
  when using resource estimator execution target.
---

# AccountForEstimates operation

Namespace: [Microsoft.Quantum.ResourceEstimation](xref:Microsoft.Quantum.ResourceEstimation)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Account for the resource estimates of an unimplemented operation,

```qsharp
operation AccountForEstimates (estimates : (Int, Int)[], layout : Int, arguments : Qubit[]) : Unit is Adj
```


## Input

### estimates : ([Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals),[Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals))[]




### layout : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Provides the layout scheme that is used to convert logical resource estimates


### arguments : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Operation takes these qubits as its arguments.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)
