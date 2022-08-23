import { defineSidebarConfig } from "vuepress-theme-hope";
import { highQualityTechnicalArticles } from "./sidebar/high-quality-technical-articles";
import { aboutTheAuthor } from "./sidebar/about-the-author";
import { books } from "./sidebar/books";
import { openSourceProject } from "./sidebar/open-source-project";

export const sidebarConfig = defineSidebarConfig({
  // 应该把更精确的路径放置在前边
  "/open-source-project/": openSourceProject,
  "/books/": books,
  "/about-the-author/": aboutTheAuthor,
  "/high-quality-technical-articles/": highQualityTechnicalArticles,
  "/javaguide/": ["intro", "history", "contribution-guideline", "faq", "todo"],
  "/zhuanlan/": [
    "java-mian-shi-zhi-bei",
    "handwritten-rpc-framework",
    "source-code-reading",
  ],
  // 必须放在最后面
  "/": [
    {
      text: "面试准备",
      icon: "interview",
      prefix: "interview-preparation/",
      collapsable: true,
      children: [
        "teach-you-how-to-prepare-for-the-interview-hand-in-hand",
        "interview-experience",
        "self-test-of-common-interview-questions",
      ],
    },
    {
      text: "Java",
      icon: "java",
      prefix: "java/",
      collapsable: true,
      children: [
        {
          text: "基础",
          prefix: "basis/",
          icon: "basic",
          collapsable: true,
          children: [
            "java-basic-questions-01",
            "java-basic-questions-02",
            "java-basic-questions-03",
            {
              text: "重要知识点",
              icon: "star",
              collapsable: true,
              children: [
                "why-there-only-value-passing-in-java",
                "serialization",
                "generics-and-wildcards",
                "reflection",
                "proxy",
                "bigdecimal",
                "unsafe",
                "spi",
                "syntactic-sugar",
              ],
            },
          ],
        },
        {
          text: "集合",
          prefix: "collection/",
          icon: "container",
          collapsable: true,
          children: [
            "java-collection-questions-01",
            "java-collection-questions-02",
            "java-collection-precautions-for-use",
            {
              text: "源码分析",
              collapsable: true,
              icon: "star",
              children: [
                "arraylist-source-code",
                "hashmap-source-code",
                "concurrent-hash-map-source-code",
              ],
            },
          ],
        },

        {
          text: "IO",
          prefix: "io/",
          icon: "code",
          collapsable: true,
          children: ["io-basis", "io-design-patterns", "io-model"],
        },
        {
          text: "并发编程",
          prefix: "concurrent/",
          icon: "et-performance",
          collapsable: true,
          children: [
            "java-concurrent-questions-01",
            "java-concurrent-questions-02",
            "java-concurrent-questions-03",
            {
              text: "重要知识点",
              icon: "star",
              collapsable: true,
              children: [
                "jmm",
                "java-thread-pool-summary",
                "java-thread-pool-best-practices",
                "java-concurrent-collections",
                "aqs",
                "atomic-classes",
                "threadlocal",
                "completablefuture-intro",
              ],
            },
          ],
        },
        {
          text: "JVM",
          prefix: "jvm/",
          icon: "virtual_machine",
          collapsable: true,
          children: [
            "memory-area",
            "jvm-garbage-collection",
            "class-file-structure",
            "class-loading-process",
            "classloader",
            "jvm-parameters-intro",
            "jvm-intro",
            "jdk-monitoring-and-troubleshooting-tools",
          ],
        },
        {
          text: "新特性",
          prefix: "new-features/",
          icon: "featured",
          collapsable: true,
          children: [
            "java8-common-new-features",
            "java8-tutorial-translate",
            "java9",
            "java10",
            "java11",
            "java12-13",
            "java14-15",
            "java16",
          ],
        },
      ],
    },
    {
      text: "计算机基础",
      icon: "computer",
      prefix: "cs-basics/",
      collapsable: true,
      children: [
        {
          text: "网络",
          prefix: "network/",
          icon: "network",
          collapsable: true,
          children: [
            "other-network-questions",
            "computer-network-xiexiren-summary",
            {
              text: "重要知识点",
              icon: "star",
              collapsable: true,
              children: [
                "osi&tcp-ip-model",
                "application-layer-protocol",
                "http&https",
                "http1.0&http1.1",
                "http-status-codes",
                "tcp-connection-and-disconnection",
                "tcp-reliability-guarantee",
              ],
            },
          ],
        },
        {
          text: "操作系统",
          prefix: "operating-system/",
          icon: "caozuoxitong",
          collapsable: true,
          children: [
            "operating-system-basic-questions-01",
            "linux-intro",
            "shell-intro",
          ],
        },
        {
          text: "数据结构",
          prefix: "data-structure/",
          icon: "people-network-full",
          collapsable: true,
          children: [
            "linear-data-structure",
            "graph",
            "heap",
            "tree",
            "red-black-tree",
            "bloom-filter",
          ],
        },
        {
          text: "算法",
          prefix: "algorithms/",
          icon: "suanfaku",
          collapsable: true,
          children: [
            "string-algorithm-problems",
            "linkedlist-algorithm-problems",
            "the-sword-refers-to-offer",
            "10-classical-sorting-algorithms",
          ],
        },
      ],
    },
    {
      text: "数据库",
      icon: "database",
      prefix: "database/",
      collapsable: true,
      children: [
        {
          text: "基础",
          icon: "basic",
          collapsable: true,
          children: ["basis", "character-set"],
        },
        {
          text: "MySQL",
          prefix: "mysql/",
          icon: "mysql",
          collapsable: true,
          children: [
            "mysql-questions-01",
            "a-thousand-lines-of-mysql-study-notes",
            "mysql-high-performance-optimization-specification-recommendations",
            {
              text: "重要知识点",
              icon: "star",
              collapsable: true,
              children: [
                "mysql-index",
                "mysql-logs",
                "transaction-isolation-level",
                "innodb-implementation-of-mvcc",
                "how-sql-executed-in-mysql",
                "some-thoughts-on-database-storage-time",
                "index-invalidation-caused-by-implicit-conversion",
              ],
            },
          ],
        },
        {
          text: "Redis",
          prefix: "redis/",
          icon: "redis",
          collapsable: true,
          children: [
            "cache-basics",
            "redis-questions-01",
            "redis-questions-02",
            {
              text: "重要知识点",
              icon: "star",
              collapsable: true,
              children: [
                "3-commonly-used-cache-read-and-write-strategies",
                "redis-data-structures-01",
                "redis-data-structures-02",
                "redis-memory-fragmentation",
                "redis-cluster",
              ],
            },
          ],
        },
      ],
    },
    {
      text: "开发工具",
      icon: "tool",
      prefix: "tools/",
      collapsable: true,
      children: [
        {
          text: "Git",
          icon: "git",
          prefix: "git/",
          collapsable: true,
          children: ["git-intro", "github-tips"],
        },
        {
          text: "Docker",
          icon: "docker1",
          prefix: "docker/",
          collapsable: true,
          children: ["docker-intro", "docker-in-action"],
        },
        {
          text: "IDEA",
          icon: "intellijidea",
          link: "https://gitee.com/SnailClimb/awesome-idea-tutorial",
        },
      ],
    },
    {
      text: "常用框架",
      prefix: "system-design/framework/",
      icon: "framework",
      collapsable: true,
      children: [
        {
          text: "Spring&Spring Boot",
          prefix: "spring/",
          collapsable: true,
          children: [
            "spring-knowledge-and-questions-summary",
            "springboot-knowledge-and-questions-summary",
            "spring-common-annotations",
            {
              text: "重要知识点",
              icon: "star",
              collapsable: true,
              children: [
                "spring-transaction",
                "spring-design-patterns-summary",
                "spring-boot-auto-assembly-principles",
              ],
            },
          ],
        },
        "mybatis/mybatis-interview",
        "netty",
      ],
    },
    {
      text: "系统设计",
      icon: "xitongsheji",
      prefix: "system-design/",
      collapsable: true,
      children: [
        "system-design-questions",
        {
          text: "基础",
          prefix: "basis/",
          icon: "basic",
          collapsable: true,
          children: [
            "RESTfulAPI",
            "naming",
            "refactoring",
            {
              text: "单元测试指南",
              link: "unit-test",
            },
          ],
        },
        {
          text: "安全",
          prefix: "security/",
          icon: "security-fill",
          collapsable: true,
          children: [
            "basis-of-authority-certification",
            "jwt-intro",
            "advantages&disadvantages-of-jwt",
            "sso-intro",
            "design-of-authority-system",
            "sentive-words-filter",
            "data-desensitization",
          ],
        },
        "schedule-task",
        "web-real-time-message-push",
      ],
    },
    {
      text: "分布式",
      icon: "distributed-network",
      prefix: "distributed-system/",
      collapsable: true,
      children: [
        {
          text: "理论&算法&协议",
          prefix: "theorem&algorithm&protocol/",
          collapsable: true,
          children: ["cap&base-theorem", "paxos-algorithm", "raft-algorithm"],
        },
        "api-gateway",
        "distributed-id",
        "distributed-lock",
        {
          text: "RPC",
          prefix: "rpc/",
          collapsable: true,
          children: ["rpc-intro", "dubbo"],
        },
        "distributed-transaction",
        {
          text: "分布式协调",
          prefix: "distributed-process-coordination/",
          collapsable: true,
          children: [
            "zookeeper/zookeeper-intro",
            "zookeeper/zookeeper-plus",
            "zookeeper/zookeeper-in-action",
          ],
        },
      ],
    },
    {
      text: "高性能",
      icon: "et-performance",
      prefix: "high-performance/",
      collapsable: true,
      children: [
        "read-and-write-separation-and-library-subtable",
        "load-balancing",
        "cdn",
        {
          text: "消息队列",
          prefix: "message-queue/",
          icon: "MQ",
          collapsable: true,
          children: [
            "message-queue",
            "kafka-questions-01",
            "rocketmq-intro",
            "rocketmq-questions",
            "rabbitmq-intro",
            "rabbitmq-questions",
          ],
        },
      ],
    },
    {
      text: "高可用",
      icon: "highavailable",
      prefix: "high-availability/",
      collapsable: true,
      children: [
        "high-availability-system-design",
        "redundancy",
        "limit-request",
        "fallback&circuit-breaker",
        "timeout-and-retry",
        "performance-test",
      ],
    },
  ],
});
