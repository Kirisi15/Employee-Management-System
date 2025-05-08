package com.example.Employee_management_system.Service;

import com.example.Employee_management_system.DTO.EmployeeDto;
import com.example.Employee_management_system.Entity.Employee;
import com.example.Employee_management_system.Mapper.EmployeeMapper;
import com.example.Employee_management_system.Repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee createEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(createEmployee);
    }
}
