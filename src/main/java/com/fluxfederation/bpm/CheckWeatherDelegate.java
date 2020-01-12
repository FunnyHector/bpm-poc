package com.fluxfederation.bpm;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;

import java.util.Random;

public class CheckWeatherDelegate implements JavaDelegate {
    @Override
    public void execute(DelegateExecution delegateExecution) throws Exception {
        Random random = new Random();

        delegateExecution.setVariable("name", "Hector");
        delegateExecution.setVariable("weatherOk", random.nextBoolean());
    }
}
