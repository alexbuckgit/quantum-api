---
uid: Microsoft.Quantum.Canon.DelayC
title: DelayC operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: DelayC
qsharp.summary: Applies a given operation with a delay.
---

# DelayC operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies a given operation with a delay.

```qsharp
operation DelayC<'T> (op : ('T => Unit is Ctl), arg : 'T, aux : Unit) : Unit is Ctl
```


## Description

Given an operation and an input to that operation, applies

## Input

### op : 'T => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Ctl

An operation to be applied.


### arg : 'T

The input to which the operation is applied.


### aux : [Unit](xref:microsoft.quantum.lang-ref.unit)

Argument used to delay the application of operation by using



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'T

The input type of the operation to be delayed.

## See Also

- [Microsoft.Quantum.Canon.Delay](xref:Microsoft.Quantum.Canon.Delay)
- [Microsoft.Quantum.Canon.Delayed](xref:Microsoft.Quantum.Canon.Delayed)