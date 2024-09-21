package com.example;

public class Process {
  private final int processId;
  private final String processName;

  public Process(int processId, String processName) {
    this.processId = processId;
    this.processName = processName;
  }

  public int getProcessId() {
    return processId;
  }

  public String getProcessName() {
    return processName;
  }

  @Override
  public String toString() {
    return "Processo " + processId + ": " + processName;
  }
}
