---
uid: Microsoft.Quantum.Research.Chemistry
title: Microsoft.Quantum.Research.Chemistry namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Research.Chemistry
qsharp.summary: >-
  This namespace provides advanced research methods for quantum
  chemistry simulation.
---

# Microsoft.Quantum.Research.Chemistry namespace

This namespace provides advanced research methods for quantum
chemistry simulation.


<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[ApplyDeltaParity](xref:Microsoft.Quantum.Research.Chemistry.ApplyDeltaParity) |Computes difference in parity between a previous PQRS... terms and the next PQRS... term. This difference is computed on a auxiliary qubit.
|[JWOptimizedStatePreparation](xref:Microsoft.Quantum.Research.Chemistry.JWOptimizedStatePreparation) |Simple state preparation of trial state by occupying spin-orbitals
|[_ApplyOptimizedTrotterStep](xref:Microsoft.Quantum.Research.Chemistry._ApplyOptimizedTrotterStep) |
|[_JWOptimized0123Term](xref:Microsoft.Quantum.Research.Chemistry._JWOptimized0123Term) |Applies time-evolution by a PQRS term described by a `GeneratorIndex`.
|[_JWOptimized0123TermImpl](xref:Microsoft.Quantum.Research.Chemistry._JWOptimized0123TermImpl) |Implementation step of `JWOptimized0123Term_`;
|[_JWOptimizedFermionEvolution](xref:Microsoft.Quantum.Research.Chemistry._JWOptimizedFermionEvolution) |Represents a dynamical generator as a set of simulatable gates and an expansion in the JWOptimized basis.
See [Dynamical Generator Modeling](../libraries/data-structures#dynamical-generator-modeling) for more details.
|[_JWOptimizedHpqTerm](xref:Microsoft.Quantum.Research.Chemistry._JWOptimizedHpqTerm) |Applies time-evolution by a PQ term described by a `GeneratorIndex`.
|[_JWOptimizedHpqTermImpl](xref:Microsoft.Quantum.Research.Chemistry._JWOptimizedHpqTermImpl) |Implementation step of `JWOptimizedHpqTerm_`.
|[_JWOptimizedPQandPQQRTerm](xref:Microsoft.Quantum.Research.Chemistry._JWOptimizedPQandPQQRTerm) |Applies time-evolution by a PQ or PQQR term described by a `GeneratorIndex`.
|[_JWOptimizedZ](xref:Microsoft.Quantum.Research.Chemistry._JWOptimizedZ) |Applies a Rz rotation, with a C-NOT trick to double phase in phase estimation.
|[_JWOptimizedZTerm](xref:Microsoft.Quantum.Research.Chemistry._JWOptimizedZTerm) |Applies time-evolution by a Z term described by a `GeneratorIndex`.
|[_JWOptimizedZZTerm](xref:Microsoft.Quantum.Research.Chemistry._JWOptimizedZZTerm) |Applies time-evolution by a ZZ term described by a `GeneratorIndex`.

## Functions

| Name | Summary |
|------|---------|
|[JWOptimizedFermionEvolutionFunction](xref:Microsoft.Quantum.Research.Chemistry.JWOptimizedFermionEvolutionFunction) |Represents a dynamical generator as a set of simulatable gates and an expansion in the JWOptimized basis.
|[JWOptimizedGeneratorSystem](xref:Microsoft.Quantum.Research.Chemistry.JWOptimizedGeneratorSystem) |Converts a Hamiltonian described by `JWOptimizedHTerms` to a `GeneratorSystem` expressed in terms of the `GeneratorIndex` convention defined in this file.
|[JordanWignerOptimizedFermionEvolutionSet](xref:Microsoft.Quantum.Research.Chemistry.JordanWignerOptimizedFermionEvolutionSet) |Represents a dynamical generator as a set of simulatable gates and an expansion in the Pauli basis.
|[OptimizedTrotterStepOracle](xref:Microsoft.Quantum.Research.Chemistry.OptimizedTrotterStepOracle) |Returns optimized Trotter step operation and the parameters necessary to run it.
|[_DeltaParityCNOTbitstring](xref:Microsoft.Quantum.Research.Chemistry._DeltaParityCNOTbitstring) |Classical processing step of `ApplyDeltaParity`. This computes a list of control qubits for evaluating parity difference between any two PQRS... terms of even length.

<!-- /summaries -->