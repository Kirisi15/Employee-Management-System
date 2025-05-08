package com.example.Employee_management_system.Repository;

import com.example.Employee_management_system.Entity.Employee;
import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // Custom query methods can be defined here if needed
    // For example, findByLastName(String lastName);
}
