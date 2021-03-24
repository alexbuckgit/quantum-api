---
uid: Microsoft.Quantum.Math.ExpModI
title: ExpModI function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: ExpModI
qsharp.summary: >-
  Returns an integer raised to a given power, with respect to a given
  modulus.
---

# ExpModI function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns an integer raised to a given power, with respect to a given

```qsharp
function ExpModI (expBase : Int, power : Int, modulus : Int) : Int
```


## Description

Let us denote expBase by $x$, power by $p$ and modulus by $N$.

## Input

### expBase : [Int](xref:microsoft.quantum.lang-ref.int)




### power : [Int](xref:microsoft.quantum.lang-ref.int)




### modulus : [Int](xref:microsoft.quantum.lang-ref.int)





## Output : [Int](xref:microsoft.quantum.lang-ref.int)



## Remarks

Takes time proportional to the number of bits in `power`, not the `power` itself.