---
uid: Microsoft.Quantum.Math.IsFinite
title: IsFinite function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: IsFinite
qsharp.summary: Returns whether a given floating-point value is a finite number.
---

# IsFinite function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns whether a given floating-point value is a finite number.

```qsharp
function IsFinite (d : Double) : Bool
```


## Input

### d : [Double](xref:microsoft.quantum.lang-ref.double)

The floating-point value to be checked.



## Output : [Bool](xref:microsoft.quantum.lang-ref.bool)



## Example

```qsharp

## Remarks

`NaN()` is not a number, and is thus neither a finite number nor