package com.example.api.repositories;


import com.example.api.models.PersonalProgress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.Table;
import java.util.List;

@Table(name = "personalProgress")
@Repository
public interface PersonalProgressRepository extends JpaRepository<PersonalProgress, Long> {

    @Query(value = "SELECT DISTINCT id FROM personalProgress ORDER BY id, nativeQuery = true")
    List<Long> getDistinctIds();

}
