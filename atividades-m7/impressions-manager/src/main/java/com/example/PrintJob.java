package com.example;

public class PrintJob {
  private final String fileName;
  private final int jobId;

  public PrintJob(String fileName, int jobId) {
    this.fileName = fileName;
    this.jobId = jobId;
  }

  public String getFileName() {
    return fileName;
  }

  public int getJobId() {
    return jobId;
  }

  @Override
  public String toString() {
    return "Trabalho " + jobId + ": " + fileName;
  }
}
